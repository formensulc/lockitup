import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Welcome from "./views/welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: "/create",
    element: <div>HELLO</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);