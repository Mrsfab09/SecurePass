import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Generator } from "./pages/Generator/Generator.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
  {
    element: <Generator />,
    path: "/generator",
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
