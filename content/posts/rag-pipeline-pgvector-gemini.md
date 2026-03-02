---
title: "How I Built a RAG Pipeline with pgvector and Google Gemini"
date: "2026-02-28"
summary: "A step-by-step walkthrough of building a production-ready RAG pipeline using pgvector for vector storage and Google Gemini for embeddings and generation."
tags: ["RAG", "pgvector", "PostgreSQL", "Google Gemini", "AI", "Python"]
draft: false
---

ArXiv publishes hundreds of new papers every day. Searching it is keyword-based by default — you type terms, you get titles, you skim abstracts. But what if you could ask _"What are the trade-offs between RLHF and DPO for LLM alignment?"_ and get a cited, synthesised answer drawn from the actual papers?

That's the problem I set out to solve with the [ArXiv RAG Research Assistant](https://arxivsearchengine.streamlit.app). This post is a detailed walkthrough of every architectural decision: how the data flows in, how vectors are stored and queried, and how Gemini turns retrieved chunks into coherent answers.

---

## Architecture at a Glance

The pipeline has six discrete stages:

1. **Ingestion** — a Python script queries the ArXiv API for recent CS papers and stores raw metadata
2. **Embedding** — each abstract is converted into a 384-dim vector using Gemini `text-embedding-004`
3. **Storage** — vectors live in a `papers` table in Supabase (PostgreSQL + pgvector extension)
4. **Retrieval** — at query time, the user's question is embedded and matched against stored vectors via cosine similarity
5. **Generation** — top-k retrieved abstracts are injected as context into a Gemini 1.5 Flash prompt
6. **Citations** — the response includes bracketed source references with direct ArXiv links

Orchestration is handled by a GitHub Actions workflow that runs the ingestion script every Monday at 03:00 UTC, keeping the corpus fresh without any manual intervention.

---

## Setting Up pgvector on Supabase

Supabase ships with pgvector pre-installed — you just need to enable it on your project:

```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

Then the papers table:

```sql
CREATE TABLE papers (
  id          SERIAL PRIMARY KEY,
  arxiv_id    TEXT UNIQUE NOT NULL,
  title       TEXT NOT NULL,
  abstract    TEXT NOT NULL,
  authors     TEXT[],
  url         TEXT,
  published   DATE,
  embedding   VECTOR(384)
);
```

A few things worth noting here:

- **`arxiv_id` is UNIQUE** — this is the idempotency key. The ingestion script uses `INSERT ... ON CONFLICT (arxiv_id) DO NOTHING`, so re-running the pipeline never creates duplicate rows.
- **384 dimensions** — Gemini `text-embedding-004` supports a configurable `output_dimensionality` parameter. Dropping from the default 768 to 384 halves storage and speeds up index scans with negligible quality loss for abstract-length text.

For the index I went with HNSW over ivfflat. ivfflat requires you to choose the number of lists up front (and ideally re-index as your dataset grows), while HNSW builds a navigable graph that performs consistently without tuning:

```sql
CREATE INDEX ON papers
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);
```

The `m = 16` and `ef_construction = 64` values are Supabase's recommended defaults for datasets under ~500k rows. Once the corpus grows past that, bumping `ef_construction` to 128 improves recall at the cost of a slower build.

---

## Generating Embeddings with Gemini

The Gemini embedding API has one subtlety that matters: the `task_type` parameter. Embeddings optimised for indexing a document (`retrieval_document`) are directionally different from embeddings optimised for a search query (`retrieval_query`). Using the wrong type for either side measurably hurts retrieval quality.

```python
import time
import google.generativeai as genai

genai.configure(api_key=GEMINI_API_KEY)

def embed_texts(texts: list[str], task: str, batch_size: int = 20) -> list[list[float]]:
    """
    Embed a list of texts in batches.
    task: "retrieval_document" for indexing, "retrieval_query" for search.
    """
    embeddings = []
    for i in range(0, len(texts), batch_size):
        batch = texts[i : i + batch_size]
        result = genai.embed_content(
            model="models/text-embedding-004",
            content=batch,
            task_type=task,
            output_dimensionality=384,
        )
        embeddings.extend(result["embedding"])
        time.sleep(0.5)  # free-tier: 1,500 RPM — the sleep keeps bursts safe
    return embeddings
```

The `time.sleep(0.5)` call is a blunt but reliable guard against hitting the free-tier rate limit of 1,500 requests per minute when batch_size is small. On the paid tier you'd remove it or replace it with exponential backoff.

Batching is important: the API accepts a list as `content` and returns all embeddings in a single round-trip, so a batch of 20 abstracts costs the same latency as a single one.

---

## Retrieval: The Similarity Query

At query time, the user's question is embedded with `task_type="retrieval_query"` and then matched against stored vectors using cosine distance.

Rather than writing the SQL inline in Python, I wrapped it in a Supabase RPC function. This keeps the vector logic in the database layer and lets the Python side stay clean:

```sql
CREATE OR REPLACE FUNCTION match_papers(
  query_embedding VECTOR(384),
  match_count     INT DEFAULT 5
)
RETURNS TABLE (
  id        INT,
  title     TEXT,
  abstract  TEXT,
  url       TEXT,
  authors   TEXT[],
  distance  FLOAT
)
LANGUAGE SQL
AS $$
  SELECT id, title, abstract, url, authors,
         embedding <=> query_embedding AS distance
  FROM papers
  ORDER BY embedding <=> query_embedding
  LIMIT match_count;
$$;
```

The `<=>` operator is pgvector's cosine distance operator — it returns a value in `[0, 2]` where 0 means identical and 2 means opposite. Lower is better, so `ORDER BY ... ASC` (the default) gives you the most relevant results first.

Calling it from Python via the Supabase client:

```python
def retrieve(question: str, top_k: int = 5) -> list[dict]:
    query_vec = genai.embed_content(
        model="models/text-embedding-004",
        content=question,
        task_type="retrieval_query",
        output_dimensionality=384,
    )["embedding"]

    response = (
        supabase.rpc(
            "match_papers",
            {"query_embedding": query_vec, "match_count": top_k},
        )
        .execute()
    )
    return response.data
```

`top_k = 5` was chosen empirically. At 3, answers sometimes missed relevant supporting evidence. At 8, the Gemini context window started filling with marginally related papers that diluted the answer quality.

---

## The Generation Step

With retrieved chunks in hand, the last step is assembling context and calling Gemini 1.5 Flash.

```python
def answer(question: str, chunks: list[dict]) -> str:
    context = "\n\n".join(
        f"[{i + 1}] **{c['title']}**\nAuthors: {', '.join(c['authors'])}\n"
        f"Link: {c['url']}\n\n{c['abstract']}"
        for i, c in enumerate(chunks)
    )

    prompt = f"""You are a research assistant helping a user explore recent AI papers.
Answer the question using only the provided abstracts.
Cite each paper you draw from using its bracketed number, e.g. [1] or [2, 3].
If the answer cannot be found in the provided abstracts, say so clearly.

--- PAPERS ---
{context}
--------------

Question: {question}

Answer:"""

    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response.text
```

A few prompt design choices here:

- **"using only the provided abstracts"** — this is the most important instruction. Without it, Gemini will supplement with its training data, which can be outdated or hallucinated.
- **Explicit citation format** — asking for bracketed numbers makes it easy to parse citations programmatically if you later want to render them as links.
- **Graceful no-answer** — "say so clearly" prevents confident-sounding fabrications when the corpus doesn't contain relevant material.

I chose Gemini 1.5 Flash over Pro because the generation step isn't the bottleneck — retrieval quality is. Flash handles the summarisation task well, and its lower cost meant I could stay comfortably on the free tier during development.

---

## Automated Ingestion with GitHub Actions

The scraping script runs on a weekly schedule via GitHub Actions. The workflow is straightforward:

```yaml
name: Weekly ArXiv Ingestion

on:
  schedule:
    - cron: "0 3 * * 1" # every Monday at 03:00 UTC
  workflow_dispatch: # also triggerable manually from the Actions tab

jobs:
  ingest:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Run ingestion script
        run: python scripts/ingest.py
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_KEY: ${{ secrets.SUPABASE_KEY }}
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
```

The ingestion script itself queries the ArXiv API for papers published in the last 7 days across the `cs.AI`, `cs.LG`, and `cs.CL` categories, then upserts with `ON CONFLICT DO NOTHING`. A typical Monday run ingests 200–400 new abstracts and costs about $0.00 at the free-tier embedding quota.

---

## Lessons Learned

**Chunk size only matters when you have long documents.** ArXiv abstracts average ~150 words, which fit comfortably inside the embedding model's token limit in one pass. If you're ingesting full-paper PDFs, chunking at ~400–500 tokens with a 50-token overlap is a reasonable starting point. Avoid chunking below 100 tokens — the embeddings lose semantic coherence at that granularity.

**`task_type` is not optional.** I initially embedded both documents and queries with `task_type="retrieval_document"` — retrieval quality was noticeably worse before I corrected this. The model was trained with asymmetric tasks in mind, and the embedding space reflects that.

**Idempotency beats cleverness.** The `ON CONFLICT DO NOTHING` approach is dead simple, but it's reliable. An early version tried to diff against the last ingestion timestamp, which created subtle edge-case bugs around timezone handling. Unique constraint + ignore is harder to break.

---

## What I'd Do Differently

**Hybrid search (BM25 + vector).** Pure vector search struggles with exact keyword lookups — if a user searches for a specific model name like "Mistral-7B", cosine similarity might surface papers that discuss the same _concept_ without mentioning that name. Combining vector similarity with full-text BM25 ranking (Supabase supports this via `to_tsvector` / `ts_rank`) would handle both cases more robustly.

**Cross-encoder re-ranking.** The bi-encoder setup (embed once, compare with cosine distance) is fast but not always precise. A second-pass cross-encoder that jointly scores `(query, candidate)` pairs from the top-20 results before final top-5 selection would meaningfully improve answer relevance — at the cost of an extra model call per query.

**Metadata filters.** Right now every query searches the entire corpus. Adding filter parameters — publication date range, ArXiv category, specific author — would make the tool genuinely useful for narrower research questions without increasing retrieval cost.

---

The full source code is on [GitHub](https://github.com/RimaNafougui/arxivsearchengine) and the live demo runs at [arxivsearchengine.streamlit.app](https://arxivsearchengine.streamlit.app).

_— Rima_
