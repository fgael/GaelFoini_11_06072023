import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-container">
      <p className="error">404</p>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={"/"}>
        <p className="home-link">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
};

export default Error404;
