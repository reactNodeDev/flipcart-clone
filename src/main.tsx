import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary key={window.location.pathname} fallback={<></>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
