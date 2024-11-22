import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";
// import dotenv from "dotenv";
// dotenv.config();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={App} />
  </StrictMode>
);
