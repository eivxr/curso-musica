import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { AppRouter } from "./AppRouter";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
      <BrowserRouter>
        <CssBaseline />
        <AppRouter />
      </BrowserRouter>

  </React.StrictMode>
);
