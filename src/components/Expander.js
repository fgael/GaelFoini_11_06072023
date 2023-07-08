import React, { useState } from "react";
import PropTypes from "prop-types";
import chevronDown from "../img/chevron-down.png";

const Expander = ({ title, content, containerWidth }) => {
  // hook useState pour gérer l'état du composant
  const [isOpen, setIsOpen] = useState(false);

  // gestion du click pour ouvrir fermer le composant
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // gestion de la width du container
  const containerStyle = {
    width: containerWidth,
  };

  return (
    <div className="expander-container">
      {/* conteneur principal */}
      <div
        className={`expander ${isOpen ? "open" : ""}`}
        style={containerStyle}
      >
        {/* header du composant */}
        <div className="expander-header" onClick={handleToggle}>
          <h3>{title}</h3>
          <img
            src={chevronDown}
            alt="boutton chevron"
            className={`chevron-${isOpen ? "up" : "down"}`}
          ></img>
        </div>
        {/* contenu affiché uniquement si le composant est ouvert */}
        {isOpen && (
          <div className="expander-content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// definition des props
Expander.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  containerWidth: PropTypes.string.isRequired,
};

export default Expander;
