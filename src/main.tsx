import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import { ModalProvider } from "@particle-network/connectkit";
import particleConfig from "./config/particle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider options={particleConfig}>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
