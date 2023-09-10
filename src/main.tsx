import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { AppErrorBoundary } from "./components/index.ts";
import {MotionConfig} from 'framer-motion'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary key={window.location.pathname} fallback={<AppErrorBoundary />}>
      <MotionConfig transition={{duration:.3, repeatType:'mirror'}}>
      <App />
      </MotionConfig>
    </ErrorBoundary>
  </React.StrictMode>
);
