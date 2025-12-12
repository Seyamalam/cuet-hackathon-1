# Delineate Observability Dashboard

React-based observability dashboard for the CUET Hackathon 2025 Challenge 4.

## Features

- 🏥 **Health Status** - Real-time API and storage health monitoring
- 📥 **Download Jobs** - Initiate and track download jobs
- 🔍 **Trace Viewer** - View distributed traces from Jaeger
- 🐛 **Error Tracking** - Capture and display errors with Sentry integration
- 📊 **Metrics** - Links to Prometheus and Grafana dashboards

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment config
cp .env.example .env

# Start development server
npm run dev
```

The dashboard will be available at http://localhost:5173

## Configuration

Create a `.env` file with:

```env
VITE_API_URL=http://localhost:3000
VITE_JAEGER_URL=http://localhost:16686
VITE_PROMETHEUS_URL=http://localhost:9090
VITE_GRAFANA_URL=http://localhost:3001
VITE_OTEL_ENDPOINT=http://localhost:4318
VITE_SENTRY_DSN=  # Optional: Your Sentry DSN
```

## Trace Correlation

The dashboard implements full trace correlation:

1. **Frontend**: OpenTelemetry creates spans for user actions
2. **API Calls**: Trace context propagated via `traceparent` header
3. **Backend**: Receives and continues the trace
4. **Sentry**: Errors are tagged with trace IDs

```
Frontend span → trace-id: abc123
Backend header: traceparent=00-abc123-...
Sentry error → trace_id=abc123
```

## Testing Sentry

Use the "Test Sentry via API" button to trigger an intentional error:

```bash
curl -X POST "http://localhost:3000/v1/download/check?sentry_test=true" \
  -H "Content-Type: application/json" \
  -d '{"file_id": 70000}'
```

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- OpenTelemetry (Web SDK)
- Sentry
- Lucide Icons
