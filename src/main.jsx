import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import RootLayout from "./component/layouts/RootLayout";
import Home from "./component/pages/Home";
import { Login } from "./component/pages/Login";
import Register from "./component/pages/Register";
import About from "./component/pages/About";
import Feedback from "./component/pages/Feedback";
import Users from "./component/pages/Users";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
