import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-header.png";

const NavBar = () => {
  return (
    <header>
      <nav className="header-navigation">
        {/* logo */}
        <NavLink to="/">
          <img className="logo-header" src={logo} alt="Logo" />
        </NavLink>
        {/* liste de lien */}
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
