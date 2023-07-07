import React from "react";
import { NavLink } from "react-router-dom";

// img
import logo from "../img/logo-header.png";

const NavBar = () => {
  return (
    <header>
      <nav className="navigation">
        <img src={logo} alt="Logo" />
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
