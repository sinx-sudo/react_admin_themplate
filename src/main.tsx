import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import "./index.css"; //tailwind css style sheet
// import { RouterProvider } from "react-router";
// import { router } from "./routes";
const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>
);