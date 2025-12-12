// Simplified tracing module for the dashboard
// Note: Full OpenTelemetry web tracing requires additional browser-specific packages
// This provides a lightweight tracing interface that can be expanded later

const OTEL_ENDPOINT =
  import.meta.env.VITE_OTEL_ENDPOINT || "http://localhost:4318";

// Simple span interface
export interface Span {
  setAttribute(key: string, value: string | number | boolean): void;
  setStatus(status: { code: number; message?: string }): void;
  end(): void;
}

// Status codes matching OpenTelemetry
export const SpanStatusCode = {
  OK: 0,
  ERROR: 2,
} as const;

// Generate a simple trace ID
function generateTraceId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Generate a simple span ID
function generateSpanId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(8)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Current trace context
let currentTraceId: string | null = null;
let currentSpanId: string | null = null;

// Create a simple span
function createSpan(name: string): Span {
  const spanId = generateSpanId();
  const traceId = currentTraceId || generateTraceId();
  const startTime = Date.now();

  currentTraceId = traceId;
  currentSpanId = spanId;

  const attributes: Record<string, string | number | boolean> = {
    name,
  };

  return {
    setAttribute(key: string, value: string | number | boolean) {
      attributes[key] = value;
    },
    setStatus(status: { code: number; message?: string }) {
      attributes["status.code"] = status.code;
      if (status.message) {
        attributes["status.message"] = status.message;
      }
    },
    end() {
      const duration = Date.now() - startTime;
      // Log trace info for debugging (in production, this would send to OTLP endpoint)
      if (import.meta.env.DEV) {
        console.debug(`[Trace] ${name}`, {
          traceId,
          spanId,
          duration: `${duration}ms`,
          attributes,
        });
      }
    },
  };
}

// Export tracer for manual instrumentation
export const tracer = {
  startActiveSpan<T>(
    name: string,
    fn: (span: Span) => Promise<T> | T,
  ): Promise<T> | T {
    const span = createSpan(name);
    try {
      const result = fn(span);
      if (result instanceof Promise) {
        return result
          .then((res) => {
            span.end();
            return res;
          })
          .catch((err) => {
            span.end();
            throw err;
          });
      }
      span.end();
      return result;
    } catch (error) {
      span.end();
      throw error;
    }
  },
};

// Helper to create spans with automatic error handling
export function withSpan<T>(
  name: string,
  fn: (span: Span) => Promise<T>,
): Promise<T> {
  return tracer.startActiveSpan(name, async (span) => {
    try {
      const result = await fn(span);
      span.setStatus({ code: SpanStatusCode.OK });
      return result;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error instanceof Error ? error.message : "Unknown error",
      });
      throw error;
    }
  }) as Promise<T>;
}

// Get current trace context for correlation
export function getTraceContext(): { traceId: string; spanId: string } | null {
  if (!currentTraceId || !currentSpanId) return null;

  return {
    traceId: currentTraceId,
    spanId: currentSpanId,
  };
}

// Export for compatibility
export const trace = {
  getActiveSpan: () => null,
};

console.log("[Tracing] Initialized lightweight tracing module");
console.log(`[Tracing] OTLP endpoint configured: ${OTEL_ENDPOINT}`);
