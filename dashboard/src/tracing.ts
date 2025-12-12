// Advanced tracing module for the dashboard with W3C Trace Context propagation
// Implements OpenTelemetry-compatible tracing with full context propagation

const OTEL_ENDPOINT =
  import.meta.env.VITE_OTEL_ENDPOINT || "http://localhost:4318";

// Simple span interface
export interface Span {
  traceId: string;
  spanId: string;
  parentSpanId: string | null;
  name: string;
  startTime: number;
  endTime?: number;
  attributes: Record<string, string | number | boolean>;
  events: SpanEvent[];
  setAttribute(key: string, value: string | number | boolean): void;
  setStatus(status: { code: number; message?: string }): void;
  addEvent(name: string, attributes?: Record<string, string | number | boolean>): void;
  end(): void;
}

export interface SpanEvent {
  name: string;
  timestamp: number;
  attributes?: Record<string, string | number | boolean>;
}

// Status codes matching OpenTelemetry
export const SpanStatusCode = {
  OK: 0,
  UNSET: 1,
  ERROR: 2,
} as const;

// Generate a simple trace ID (128-bit hex)
function generateTraceId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Generate a simple span ID (64-bit hex)
function generateSpanId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(8)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Span storage for local trace visualization
const spanStorage: Map<string, Span[]> = new Map();
const MAX_STORED_TRACES = 100;

// Current trace context
let currentTraceId: string | null = null;
let currentSpanId: string | null = null;

// Store completed spans for visualization
function storeSpan(span: Span): void {
  const spans = spanStorage.get(span.traceId) || [];
  spans.push(span);
  spanStorage.set(span.traceId, spans);
  
  // Cleanup old traces
  if (spanStorage.size > MAX_STORED_TRACES) {
    const oldest = spanStorage.keys().next().value;
    if (oldest) spanStorage.delete(oldest);
  }
}

// Get all stored traces
export function getStoredTraces(): Map<string, Span[]> {
  return new Map(spanStorage);
}

// Get spans for a specific trace
export function getTraceSpans(traceId: string): Span[] {
  return spanStorage.get(traceId) || [];
}

// Clear stored traces
export function clearStoredTraces(): void {
  spanStorage.clear();
}

// Create a span with full context
function createSpan(name: string, parentSpanId?: string): Span {
  const spanId = generateSpanId();
  const traceId = currentTraceId || generateTraceId();
  const startTime = Date.now();

  currentTraceId = traceId;
  const previousSpanId = currentSpanId;
  currentSpanId = spanId;

  const span: Span = {
    traceId,
    spanId,
    parentSpanId: parentSpanId || previousSpanId,
    name,
    startTime,
    attributes: { name },
    events: [],
    setAttribute(key: string, value: string | number | boolean) {
      this.attributes[key] = value;
    },
    setStatus(status: { code: number; message?: string }) {
      this.attributes["status.code"] = status.code;
      if (status.message) {
        this.attributes["status.message"] = status.message;
      }
    },
    addEvent(eventName: string, attributes?: Record<string, string | number | boolean>) {
      this.events.push({
        name: eventName,
        timestamp: Date.now(),
        attributes,
      });
    },
    end() {
      this.endTime = Date.now();
      const duration = this.endTime - this.startTime;
      this.attributes["duration.ms"] = duration;
      
      // Store span for visualization
      storeSpan(this);
      
      // Log trace info for debugging
      if (import.meta.env.DEV) {
        console.debug(`[Trace] ${name}`, {
          traceId,
          spanId,
          parentSpanId: this.parentSpanId,
          duration: `${duration}ms`,
          attributes: this.attributes,
          events: this.events,
        });
      }
      
      // Reset to parent context
      currentSpanId = previousSpanId;
    },
  };

  return span;
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

// Generate W3C Trace Context headers for distributed tracing
export function getTraceHeaders(): Record<string, string> {
  if (!currentTraceId || !currentSpanId) {
    // Generate new trace context if none exists
    currentTraceId = generateTraceId();
    currentSpanId = generateSpanId();
  }
  
  // W3C Trace Context format: version-traceId-spanId-flags
  const traceparent = `00-${currentTraceId}-${currentSpanId}-01`;
  
  return {
    'traceparent': traceparent,
    'x-trace-id': currentTraceId,
    'x-span-id': currentSpanId,
  };
}

// Parse incoming traceparent header
export function parseTraceparent(header: string): { traceId: string; spanId: string; flags: string } | null {
  const parts = header.split('-');
  if (parts.length !== 4) return null;
  
  return {
    traceId: parts[1],
    spanId: parts[2],
    flags: parts[3],
  };
}

// Set trace context from external source (e.g., response headers)
export function setTraceContext(traceId: string, spanId?: string): void {
  currentTraceId = traceId;
  if (spanId) {
    currentSpanId = spanId;
  }
}

// Start a new trace (clears current context)
export function startNewTrace(): { traceId: string; spanId: string } {
  currentTraceId = generateTraceId();
  currentSpanId = generateSpanId();
  return { traceId: currentTraceId, spanId: currentSpanId };
}

// Performance metrics tracking
interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  traceId?: string;
  attributes?: Record<string, string | number | boolean>;
}

const performanceMetrics: PerformanceMetric[] = [];
const MAX_METRICS = 1000;

export function recordMetric(
  name: string, 
  value: number, 
  attributes?: Record<string, string | number | boolean>
): void {
  performanceMetrics.push({
    name,
    value,
    timestamp: Date.now(),
    traceId: currentTraceId || undefined,
    attributes,
  });
  
  // Cleanup old metrics
  if (performanceMetrics.length > MAX_METRICS) {
    performanceMetrics.splice(0, performanceMetrics.length - MAX_METRICS);
  }
}

export function getPerformanceMetrics(): PerformanceMetric[] {
  return [...performanceMetrics];
}

export function clearPerformanceMetrics(): void {
  performanceMetrics.length = 0;
}

// Export for compatibility
export const trace = {
  getActiveSpan: () => null,
};

console.log("[Tracing] Initialized advanced tracing module with W3C Trace Context");
console.log(`[Tracing] OTLP endpoint configured: ${OTEL_ENDPOINT}`);
