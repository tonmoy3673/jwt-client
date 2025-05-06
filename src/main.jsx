import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import RootLayout from "./component/layouts/RootLayout";
import Home from "./component/pages/Home";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
