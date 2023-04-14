import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context/PdfContext";
import { FilterProvider } from "./context/FilterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <FilterProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FilterProvider>
  </AppProvider>
);
