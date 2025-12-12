import { withSpan, getTraceHeaders, getTraceContext, recordMetric } from "./tracing";

// Dynamically determine API base URL
// Prefer same-origin proxy paths to avoid CORS and port-forward issues.
function getApiBaseUrl(): string {
  const configured = import.meta.env.VITE_API_URL;
  if (configured) return configured;

  // Default: same-origin proxy (Vite dev server or Nginx) should forward this.
  return "/api";
}

const API_BASE = getApiBaseUrl();

export interface HealthResponse {
  status: "healthy" | "unhealthy";
  checks: {
    storage: "ok" | "error";
  };
}

export interface DownloadJob {
  jobId: string;
  status: "queued" | "processing" | "completed" | "failed";
  totalFileIds: number;
  file_ids?: number[];
  createdAt?: string;
}

export interface DownloadCheckResponse {
  file_id: number;
  available: boolean;
  s3Key: string | null;
  size: number | null;
}

export interface DownloadStartResponse {
  file_id: number;
  status: "completed" | "failed";
  downloadUrl: string | null;
  size: number | null;
  processingTimeMs: number;
  message: string;
}

export interface JaegerTrace {
  traceID: string;
  spans: JaegerSpan[];
  processes: Record<string, JaegerProcess>;
}

export interface JaegerSpan {
  traceID: string;
  spanID: string;
  operationName: string;
  startTime: number;
  duration: number;
  tags: { key: string; type: string; value: string | number | boolean }[];
  logs: { timestamp: number; fields: { key: string; value: string }[] }[];
  processID: string;
}

export interface JaegerProcess {
  serviceName: string;
  tags: { key: string; value: string }[];
}

// API Client with tracing and W3C Trace Context propagation
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const startTime = performance.now();
    
    // Get trace context headers for distributed tracing
    const traceHeaders = getTraceHeaders();
    const traceContext = getTraceContext();
    
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...traceHeaders,
        ...options?.headers,
      },
    });

    const duration = performance.now() - startTime;
    
    // Record performance metric
    recordMetric("http.request.duration", duration, {
      endpoint,
      method: options?.method || "GET",
      status: response.status,
      traceId: traceContext?.traceId || "unknown",
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async getHealth(): Promise<HealthResponse> {
    return withSpan("api.health", async () => {
      return this.fetch<HealthResponse>("/health");
    });
  }

  async initiateDownload(fileIds: number[]): Promise<DownloadJob> {
    return withSpan("api.download.initiate", async (span) => {
      span.setAttribute("fileIds.count", fileIds.length);
      return this.fetch<DownloadJob>("/v1/download/initiate", {
        method: "POST",
        body: JSON.stringify({ file_ids: fileIds }),
      });
    });
  }

  async checkDownload(fileId: number): Promise<DownloadCheckResponse> {
    return withSpan("api.download.check", async (span) => {
      span.setAttribute("fileId", fileId);
      return this.fetch<DownloadCheckResponse>("/v1/download/check", {
        method: "POST",
        body: JSON.stringify({ file_id: fileId }),
      });
    });
  }

  async startDownload(fileId: number): Promise<DownloadStartResponse> {
    return withSpan("api.download.start", async (span) => {
      span.setAttribute("fileId", fileId);
      return this.fetch<DownloadStartResponse>("/v1/download/start", {
        method: "POST",
        body: JSON.stringify({ file_id: fileId }),
      });
    });
  }
}

// Jaeger API Client - uses lazy URL resolution to work at runtime
class JaegerClient {
  private getBaseUrl(): string {
    const configured = import.meta.env.VITE_JAEGER_URL;
    if (configured) return configured;

    // Default: same-origin proxy (Vite dev server or Nginx) should forward this.
    return "/jaeger";
  }

  async getServices(): Promise<string[]> {
    try {
      const baseUrl = this.getBaseUrl();
      console.log("Fetching Jaeger services from:", baseUrl);
      const response = await fetch(`${baseUrl}/api/services`);
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Failed to fetch Jaeger services:", error);
      return [];
    }
  }

  async getTraces(service: string, limit = 20): Promise<JaegerTrace[]> {
    try {
      const baseUrl = this.getBaseUrl();
      const params = new URLSearchParams({
        service,
        limit: limit.toString(),
        lookback: "1h",
      });
      const response = await fetch(`${baseUrl}/api/traces?${params}`);
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Failed to fetch Jaeger traces:", error);
      return [];
    }
  }

  async getTrace(traceId: string): Promise<JaegerTrace | null> {
    try {
      const baseUrl = this.getBaseUrl();
      const response = await fetch(`${baseUrl}/api/traces/${traceId}`);
      const data = await response.json();
      return data.data?.[0] || null;
    } catch (error) {
      console.error("Failed to fetch trace:", error);
      return null;
    }
  }
}

export const apiClient = new ApiClient(API_BASE);
export const jaegerClient = new JaegerClient();
