---
title: "How I Built a RAG Pipeline with pgvector and Google Gemini"
date: "2026-02-28"
summary: "A step-by-step walkthrough of building a production-ready RAG pipeline using pgvector for vector storage and Google Gemini for embeddings and generation."
tags: ["RAG", "pgvector", "PostgreSQL", "Google Gemini", "AI", "Python"]
draft: true
---

> **DRAFT — This post is not published.** The outline below is a placeholder. Content will be filled in before publishing.

---

## Overview

*What problem does this pipeline solve? What was the project context (ArXiv RAG Research Assistant)?*

---

## Architecture at a Glance

*High-level diagram or description of the pipeline:*

1. **Ingestion** — scraping ArXiv, chunking PDFs
2. **Embedding** — Google Gemini `text-embedding-004`
3. **Storage** — pgvector extension on PostgreSQL
4. **Retrieval** — cosine similarity search with `<=>` operator
5. **Generation** — Gemini 1.5 Flash with retrieved context
6. **Citations** — returning source metadata alongside answers

---

## Setting Up pgvector

*Walk through enabling the extension, creating the table schema, and configuring the index.*

```sql
-- TODO: add real schema
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE documents (
  id          SERIAL PRIMARY KEY,
  content     TEXT,
  embedding   VECTOR(768),
  metadata    JSONB
);

CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);
```

---

## Generating Embeddings with Google Gemini

*Cover model selection, batching strategy, and rate-limit handling.*

```python
# TODO: add real implementation
import google.generativeai as genai

genai.configure(api_key="...")
result = genai.embed_content(
    model="models/text-embedding-004",
    content="placeholder",
)
```

---

## Retrieval: Writing the Similarity Query

*Explain the query, the role of the `<=>` cosine distance operator, and tuning `top_k`.*

---

## The Generation Step

*How context is assembled from retrieved chunks. Prompt template design. Handling context length limits.*

---

## Lessons Learned

- **Chunk size matters** — *TBD*
- **Re-ranking** — *TBD*
- **Cold retrieval quality** — *TBD*

---

## What I'd Do Differently

*TBD*

---

*— Rima*
