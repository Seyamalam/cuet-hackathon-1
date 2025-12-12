# **CUET MICRO-OPS HACKATHON 2025**

## **Delineate Hackathon Challenge — CUET Fest 2025**

---

# **The Scenario**

This microservice simulates a real-world file download system where processing times vary significantly:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        Download Processing Time                         │
├─────────────────────────────────────────────────────────────────────────┤
│  Fast Downloads    ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ~10-15s    │
│  Medium Downloads  ████████████████████░░░░░░░░░░░░░░░░░░░░  ~30-60s    │
│  Slow Downloads    ████████████████████████████████████████  ~60-120s   │
└─────────────────────────────────────────────────────────────────────────┘
```

## **Why this matters**

When deploying this behind a reverse proxy (Cloudflare, nginx, AWS ALB), you will encounter:

* **Connection Timeouts:** Cloudflare’s 100s timeout kills long requests
* **Gateway Errors:** Users see 504 errors
* **Poor UX:** No progress feedback
* **Resource Waste:** Open connections consume memory

### **Try it yourself**

```bash
npm run start

curl -X POST http://localhost:3000/v1/download/start \
  -H "Content-Type: application/json" \
  -d '{"file_id": 70000}'
```

You will see:

```
[Download] Starting file_id=70000 | delay=85.3s (range: 10s-120s) | enabled=true
```

---

# **Hackathon Challenges**

| Challenge                           | Max Points | Difficulty |
| ----------------------------------- | ---------- | ---------- |
| Challenge 1: S3 Storage Integration | 15         | Medium     |
| Challenge 2: Architecture Design    | 15         | Hard       |
| Challenge 3: CI/CD Pipeline         | 10         | Medium     |
| Challenge 4: Observability (Bonus)  | 10         | Hard       |
| **Total**                           | **50**     |            |

---

# **Challenge 1: Self-Hosted S3 Storage Integration**

### **Your Mission**

The current Docker setup does **not** include an S3-compatible storage system. You must:

1. Modify Docker Compose (dev/prod) to include a self-hosted S3 storage service
2. Configure the API to connect to it
3. Ensure `/health` returns `"storage": "ok"`

### **Recommended Storage Options**

1. **RustFS (Recommended)**
   [https://github.com/rustfs/rustfs](https://github.com/rustfs/rustfs)

2. **MinIO**
   [https://min.io/](https://min.io/)

### **Requirements**

Your solution must:

* Add S3-compatible storage in Docker Compose
* Create bucket: **downloads**
* Configure networking
* Update env variables
* Pass all E2E tests
* `/health` must return:

```json
{"status":"healthy","checks":{"storage":"ok"}}
```

### **Required Environment Variables**

* `S3_ENDPOINT`
* `S3_ACCESS_KEY_ID`
* `S3_SECRET_ACCESS_KEY`
* `S3_BUCKET_NAME=downloads`
* `S3_FORCE_PATH_STYLE=true`

### **Testing**

```bash
npm run test:e2e

curl http://localhost:3000/health
curl -X POST http://localhost:3000/v1/download/check \
  -H "Content-Type: application/json" \
  -d '{"file_id": 70000}'
```

---

# **Challenge 2: Long-Running Download Architecture Design**

### **The Problem**

Downloads vary from 10s to 120s+. Issues:

* Proxy timeouts
* Poor UX
* Server resource exhaustion
* Retry storms

### **Your Mission**

Write **ARCHITECTURE.md** explaining how to design a scalable solution.

### **Deliverables**

#### **1. Architecture Diagram**

Must show all system components + download flow.

#### **2. Choose ONE Pattern**

### **Option A — Polling Pattern**

```
Client → POST /download/initiate
Client → GET /download/status/:jobId
Client → GET /download/:jobId
```

### **Option B — WebSocket/SSE Pattern**

Real-time push updates.

### **Option C — Webhook/Callback Pattern**

Backend → callbackUrl when done.

### **Option D — Hybrid**

---

### **3. Implementation Details**

Include:

* API changes
* New endpoints
* DB/cache schema
* Queue system (Redis, BullMQ, SQS)
* Error handling
* Timeout configuration

---

### **4. Proxy Configuration**

Include examples for:

* Cloudflare
* nginx
* Other reverse proxy

---

### **5. Frontend Integration (React/Next.js)**

Explain:

* Initiating downloads
* Showing status/progress
* Retry logic
* Handling browser close events

---

# **Challenge 3: CI/CD Pipeline Setup**

### **Your Mission**

Create a full CI/CD workflow using any cloud provider.

### **Stages**

```
Lint → Test → Build → Deploy
```

### **Pipeline Must:**

* Trigger on push & PR
* Run:

  * `npm run lint`
  * `npm run format:check`
  * `npm run test:e2e`
* Build Docker image
* Cache dependencies
* Fail on errors
* Report results

### **Deliverables**

* `.github/workflows/ci.yml` or equivalent
* README section with:

  * CI badge
  * Instructions
  * Local test guide

### **Bonus**

* Auto deploy (Railway, Render, Fly.io)
* Security scanning
* Notifications

---

# **Challenge 4: Observability Dashboard (Bonus)**

### **Your Mission**

Build a **React app** with:

* Sentry (error tracking)
* OpenTelemetry (tracing)

### **Testing Sentry**

```bash
curl -X POST "http://localhost:3000/v1/download/check?sentry_test=true" \
  -H "Content-Type: application/json" \
  -d '{"file_id": 70000}'
```

### **Dashboard Features**

* Health status
* Download job list
* Recent errors
* Trace viewer (Jaeger)
* Performance metrics

### **Trace Correlation Example**

```
Frontend span → trace-id: abc123
Backend receives header: traceparent=00-abc123-...
Backend logs → trace_id=abc123
Sentry errors → tagged with abc123
```

---

# **Technical Requirements**

| Component      | Version  |
| -------------- | -------- |
| Node.js        | >= 24.10 |
| npm            | >= 10    |
| Docker         | >= 24    |
| Docker Compose | >= 2     |

### **Tech Stack**

* Node.js 24 (native TS)
* Hono
* Zod + OpenAPI
* S3-compatible storage
* OpenTelemetry + Jaeger
* Sentry
* Scalar API Docs

---

# **Quick Start**

### **Local**

```bash
npm install
cp .env.example .env
npm run dev
```

### **Using Docker**

```bash
npm run docker:dev
npm run docker:prod
```

---

# **Environment Variables**

```dotenv
NODE_ENV=development
PORT=3000

S3_REGION=us-east-1
S3_ENDPOINT=http://localhost:9000
S3_ACCESS_KEY_ID=minioadmin
S3_SECRET_ACCESS_KEY=minioadmin
S3_BUCKET_NAME=downloads
S3_FORCE_PATH_STYLE=true

SENTRY_DSN=
OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318

REQUEST_TIMEOUT_MS=30000
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100

CORS_ORIGINS=*

DOWNLOAD_DELAY_ENABLED=true
DOWNLOAD_DELAY_MIN_MS=10000
DOWNLOAD_DELAY_MAX_MS=200000
```

---

# **API Endpoints**

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| GET    | `/`                     | Welcome            |
| GET    | `/health`               | Health check       |
| POST   | `/v1/download/initiate` | Initiate bulk job  |
| POST   | `/v1/download/check`    | Check availability |
| POST   | `/v1/download/start`    | Start download     |

---

# **Scripts**

```
npm run dev
npm run start
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run test:e2e
npm run docker:dev
npm run docker:prod
```

---

# **Project Structure**

```
.
├── src/
│   └── index.ts
├── scripts/
│   ├── e2e-test.ts
│   └── run-e2e.ts
├── docker/
│   ├── Dockerfile.dev
│   ├── Dockerfile.prod
│   ├── compose.dev.yml
│   └── compose.prod.yml
├── .github/workflows/ci.yml
├── package.json
├── tsconfig.json
└── eslint.config.mjs
```

---

# **Security Features**

* Request ID tracking
* Rate limiting
* Security headers
* CORS configuration
* Zod validation
* Path traversal prevention
* Graceful shutdown

---

If you want, I can also:

✅ Convert this into **ARCHITECTURE.md** format
✅ Create the **Docker Compose fix** for Challenge 1
✅ Generate the **full CI/CD pipeline (GitHub Actions / Jenkins)**
✅ Draw the **architecture diagram** (mermaid)

Just tell me!
