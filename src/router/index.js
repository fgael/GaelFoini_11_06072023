import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppWrapper from "../components/AppWrapper";
import Home from "../pages/Home";
import About from "../pages/About";
import Accommodation from "../pages/Accommodation";
import Error404 from "../pages/Error404";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default AppRouter;
