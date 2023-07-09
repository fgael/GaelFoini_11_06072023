import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Error404 from "./pages/Error404";

const App = () => {
  useEffect(() => {
    document.title = "Kasa";
  }, []);
  return (
    <BrowserRouter basename="/GaelFoini_11_06072023">
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

export default App;
