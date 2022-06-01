import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Me from "./pages/Me";
import Projects from "./pages/Projects";
import Studies from "./pages/Studies";
import Contact from "./pages/Contact";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact  element={<Home/>} />
        <Route path="/me" element={<Me/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/studies" element={<Studies/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
