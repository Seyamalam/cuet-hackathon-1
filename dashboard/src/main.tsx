import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App";
import "./index.css";

// Initialize tracing (must be before app renders)
import "./tracing";

// Initialize Sentry
import { initSentry } from "./sentry";
initSentry();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Sentry.ErrorBoundary
      fallback={({ error }) => (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-8 max-w-md text-center">
            <h1 className="text-xl font-bold text-red-400 mb-2">
              Something went wrong
            </h1>
            <p className="text-slate-400 mb-4">
              {error instanceof Error ? error.message : "Unknown error"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
            >
              Reload Page
            </button>
          </div>
        </div>
      )}
    >
      <App />
    </Sentry.ErrorBoundary>
  </StrictMode>,
);
