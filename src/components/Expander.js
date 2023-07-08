import React, { useState } from "react";
import PropTypes from "prop-types";
import chevronDown from "../img/icons/chevron-down.svg";

const Expander = ({
  title,
  content,
  containerWidth,
  titleFontStyle,
  paragraphFontStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // gestion du click pour ouvrir fermer le composant
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // gestion de la width du container
  const containerStyle = {
    width: containerWidth,
  };

  // gestion de la font-size du titre
  const titleStyle = {
    fontSize: titleFontStyle,
  };

  // gestion de la font-size du paragraphe
  const paragraphStyle = {
    fontSize: paragraphFontStyle,
  };

  return (
    <div className="expander-container">
      <div
        className={`expander ${isOpen ? "open" : ""}`}
        style={containerStyle}
      >
        <div className="expander-header" onClick={handleToggle}>
          <h3 style={titleStyle}>{title}</h3>
          <img
            src={chevronDown}
            alt="boutton chevron"
            className={`chevron-${isOpen ? "up" : "down"}`}
          />
        </div>
        {isOpen && (
          <div className="expander-content">
            <p style={paragraphStyle}>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Expander.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  containerWidth: PropTypes.string.isRequired,
  titleFontStyle: PropTypes.string.isRequired,
  paragraphFontStyle: PropTypes.string.isRequired,
};

export default Expander;
