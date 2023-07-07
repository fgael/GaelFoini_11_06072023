import React from "react";
import "../styles/main.scss";
import Header from "./Header";
import Footer from "./Footer";

const AppWrapper = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppWrapper;
