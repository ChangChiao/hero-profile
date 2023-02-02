import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoadingContextProvider } from "./contexts/useLoadingContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <LoadingContextProvider>
      <App />
    </LoadingContextProvider>
  // </React.StrictMode>
);
