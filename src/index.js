import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Welcome from "./views/welcome";
import NewSecret from "./views/newSecret";
import LockSecret from "./views/lockSecret";
import OpenSecret from "./views/openSecret";
import MySecret from "./views/mySecret"
import OpenPhrase from "./views/openPhrase";
import DeadSecret from "./views/deadSecret";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: "/create",
    element: <NewSecret/>,
  },
  {
    path: "/lock",
    element: <LockSecret/>
  },
  {
    path: "/open",
    element: <OpenSecret/>
  },
  {
    path: "/secret",
    element: <MySecret/>
  },
  {
    path: "/phrase",
    element: <OpenPhrase/>
  },
  {
    path: "/dead",
    element: <DeadSecret/>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);