import React from "react";
import "../styles/main.scss";
import Header from "./Header";
import Footer from "./Footer";

// composant wrapper pour englober tous les composants de l'application
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
