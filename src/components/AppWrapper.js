import React from "react";
import "../styles/main.scss";
import NavBar from "./NavBar";

const AppWrapper = ({ children }) => {
  return (
    <div className="app-wrapper">
      <NavBar />
      {children}
    </div>
  );
};

export default AppWrapper;
