import * as Sentry from "@sentry/react";

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN || "";

export function initSentry() {
  if (!SENTRY_DSN) {
    console.warn("Sentry DSN not configured. Error tracking disabled.");
    return;
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    environment: import.meta.env.MODE,
  });
}

export function captureError(error: Error, context?: Record<string, unknown>) {
  console.error("Captured error:", error);
  if (SENTRY_DSN) {
    Sentry.captureException(error, { extra: context });
  }
}

export function setUser(id: string, email?: string) {
  Sentry.setUser({ id, email });
}

export function addBreadcrumb(
  message: string,
  category: string,
  data?: Record<string, unknown>,
) {
  Sentry.addBreadcrumb({
    message,
    category,
    data,
    level: "info",
  });
}

export { Sentry };
