import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import App from "./App.tsx";
import { Home } from "./pages/front/Home.tsx";
import { Login } from "./pages/back/Login.tsx";
import { About } from "./pages/front/About.tsx";

import { loader as crestsLoader } from "./helpers/CrestsLoaders.ts";
// import { loader as crestLoader } from "./helpers/CrestLoaderById.ts";
import CrestDetails from "./pages/front/CrestDetails.tsx";
import { Dashboard } from "./pages/back/Dashboard.tsx";
import { HomeBack } from "./pages/back/HomeBack.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<App />}>
        <Route path="/" element={<Home />} loader={crestsLoader} />
        <Route path="/about" element={<About />} />
        <Route
          path="/:title/:id"
          element={<CrestDetails />}
          // loader={crestLoader}
        />
      </Route>
      <Route element={<HomeBack />}>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
