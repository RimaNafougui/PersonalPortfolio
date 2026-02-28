---
title: "Serverless ML on AWS Lambda: Architecture Decisions and Cold Start Lessons"
date: "2026-02-28"
summary: "What I learned deploying machine learning inference on AWS Lambda — from package size constraints to cold start mitigation and when serverless actually makes sense."
tags: ["AWS Lambda", "Serverless", "Machine Learning", "Python", "MLOps"]
draft: true
---

> **DRAFT — This post is not published.** The outline below is a placeholder. Content will be filled in before publishing.

---

## Why Serverless for ML?

*The motivating use case. Why not a dedicated endpoint (SageMaker, EC2, etc.)? What workload profile fits Lambda well?*

---

## Architecture Overview

*Diagram description:*

1. **Trigger** — API Gateway / S3 event / scheduled
2. **Lambda function** — inference handler
3. **Model storage** — S3 or Lambda layer
4. **Downstream** — DynamoDB / SQS result destination

---

## The Packaging Problem

*Lambda has a 250 MB unzipped deployment limit. How to keep ML dependencies under that:*

- Trimming `numpy` / `scikit-learn` with `--no-deps`
- Lambda Layers for heavy deps
- Container images (10 GB limit) as an escape hatch

```bash
# TODO: add real pip install command with size flags
pip install scikit-learn --target ./package --no-deps
```

---

## Cold Starts: What Actually Happens

*Anatomy of a cold start in a Python Lambda with a model load:*

| Phase | Typical Duration |
|---|---|
| Runtime init | ~200 ms |
| Module imports | ~300–800 ms |
| Model load from S3 | ~1–3 s |
| First inference | ~100 ms |

*Strategies tried:*
- Provisioned Concurrency — cost/benefit analysis
- Keeping model in `/tmp` across warm invocations
- Lazy loading vs eager loading at module level

---

## Memory and Timeout Tuning

*The relationship between Lambda memory allocation and CPU performance. Finding the sweet spot with AWS Lambda Power Tuning.*

---

## Observability

*Structured logging with `json-logger`. X-Ray tracing. CloudWatch metrics for p99 latency.*

---

## When NOT to Use Lambda for ML

*TBD — heavy models, streaming, GPU requirements*

---

## Lessons Learned

- **Lesson 1** — *TBD*
- **Lesson 2** — *TBD*
- **Lesson 3** — *TBD*

---

*— Rima*
