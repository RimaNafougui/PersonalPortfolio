---
title: "How I Built a Hybrid-Search RAG Pipeline on pgvector"
date: "2026-10-09"
summary: "How my ArXiv research assistant works end to end: a daily ETL pipeline, hybrid retrieval that fuses vector and full-text search, an LLM router, and an evaluation harness to measure whether retrieval actually works."
tags: ["RAG", "pgvector", "PostgreSQL", "Hybrid Search", "AI", "Python"]
draft: false
---

ArXiv publishes hundreds of new papers every day, and searching it is keyword-based by default: you type terms, you get titles, you skim abstracts. I wanted to ask _"What are the trade-offs between RLHF and DPO for LLM alignment?"_ and get a cited answer drawn from the papers themselves.

That is the [ArXiv RAG Research Assistant](https://huggingface.co/spaces/RimaNafougui/ArxivSearchEngine). It indexes 1,200+ papers across AI/ML and quantitative finance categories. This post walks through how the pieces fit together and, more importantly, how I checked that retrieval works. The code is on [GitHub](https://github.com/RimaNafougui/ArxivSearchEngine).

> This post was rewritten in October 2026. The first version described an earlier design built on Google Gemini. The Streamlit app now runs on OpenAI, while its optional REST API (`api.py`) still uses Gemini, which is why this post's URL still says "gemini".

## The shape of the system

```
ArXiv API --(daily)--> ETL pipeline --> Supabase / pgvector

User query --> LLM router --> embed query --> hybrid search (vector + full-text)
           --> top-5 diverse chunks --> streamed, grounded answer + sources
```

Everything lives in one Postgres database on Supabase. I used the `pgvector` extension instead of a dedicated vector database because the data is essentially one table of chunks with an index. One host and one connection string meant one less service to run and monitor.

## Ingestion: a daily, idempotent ETL

A GitHub Actions workflow runs every day at 02:00 UTC and does three things.

1. **Extract.** It queries the ArXiv API, newest first, across the cs.AI, cs.LG, cs.CL and cs.CV categories plus the quantitative finance subcategories, with exponential backoff on timeouts and 503 responses.
2. **Transform.** It extracts text from each PDF with `pypdf`, splits it into chunks on sentence boundaries (target about 800 characters, minimum 100) using NLTK, and embeds each chunk with `all-MiniLM-L6-v2`, a 384-dimension model that runs on a CPU.
3. **Load.** It inserts the chunks into Supabase through a batch RPC that skips anything already indexed.

The skip-on-rerun behavior matters more than it sounds. A pipeline that cron triggers every day will eventually be re-run by hand after a failure, and it should be safe to do so. Making the load idempotent removed an entire class of "did that run twice?" worries.

Splitting on sentence boundaries rather than at a fixed character count keeps each chunk a readable unit. That helps both the embedding, which sees complete thoughts, and the final answer, where the user reads the cited chunk.

## Retrieval: why hybrid

Pure vector search is good at meaning and weak at exact terms. A query containing a specific model name, acronym or equation label can land on semantically similar but wrong passages. Pure full-text search has the opposite problem: it finds the exact term but misses paraphrases.

So retrieval runs both and merges the results. A `hybrid_search` function in Postgres computes a cosine-similarity ranking with pgvector and a full-text ranking, then combines them with **reciprocal rank fusion** (RRF). RRF scores each chunk by its rank in each list rather than by raw scores, which matters because cosine similarities and full-text scores live on incompatible scales. If the hybrid function is unavailable, the app falls back to plain vector search.

Two details improve the final context:

- **Diversity.** The top results are deduplicated, and the app takes at least one chunk per paper before filling the rest, so five chunks from one paper do not crowd out the others.
- **Optional category filtering**, so a question about finance does not pull in unrelated machine learning papers.

## The router and multi-hop retrieval

Before touching the database, a small `gpt-4o-mini` call classifies each query as one of three things: search, ask for clarification, or out of scope. Vague questions get a clarifying question back, and off-topic ones are declined, instead of returning confident nonsense built from irrelevant chunks.

For harder questions there is an optional multi-hop mode. After the first retrieval pass, the model extracts a related concept from the results and the app runs a second retrieval for it, which widens coverage.

The final answer streams back token by token from the OpenAI chat API, constrained to what the retrieved papers say, with the sources listed alongside. A High, Medium or Low confidence label is derived from the cosine similarity scores of the retrieved chunks.

## Measuring retrieval instead of eyeballing it

This is the part I would not skip again. It is easy to try five queries, like what you see, and call a RAG system good. I wrote a 20-question evaluation set instead: 15 AI/ML questions and 5 quantitative finance questions, each with a list of expected keywords.

A retrieval counts as correct when at least one of the top five chunks contains enough of the expected keywords (case-insensitive substring match against the chunk and its paper title). The runner reports:

- **Hit rate@5**: the fraction of questions where the top five contains at least one relevant chunk.
- **MRR** (mean reciprocal rank): the average of 1/rank of the first relevant chunk, so finding the right chunk at position one counts for more than finding it at position five.
- **Mean top-1 similarity**, as a rough signal of how close the best match is.

Keyword matching is a blunt instrument. It cannot tell a chunk that mentions the right words from one that actually answers the question. But it is cheap, repeatable and honest, and it turns "I changed the chunk size" into a number that goes up or down. That is enough to compare retrieval changes against each other, which was the goal.

## What I would do next

- Grow the evaluation set and add a stricter relevance judgment than keyword overlap.
- Migrate the REST API off Gemini so both entry points share one model backend.
- Try a reranking step on the fused top results.

If you want to try it, the [live demo](https://huggingface.co/spaces/RimaNafougui/ArxivSearchEngine) is on Hugging Face Spaces.
