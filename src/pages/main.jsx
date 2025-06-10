import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Corrected path
import App from "./App.jsx"; // Corrected path and added .jsx extension

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

