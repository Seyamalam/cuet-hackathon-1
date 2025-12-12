/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_JAEGER_URL: string;
  readonly VITE_PROMETHEUS_URL: string;
  readonly VITE_GRAFANA_URL: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_OTEL_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
