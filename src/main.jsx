import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextFileProvider } from "./context/ContextFileProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextFileProvider>
      <App />
    </ContextFileProvider>
  </StrictMode>
);
