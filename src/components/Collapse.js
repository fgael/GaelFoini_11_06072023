import React, { useState } from "react";
import PropTypes from "prop-types";
import chevronDown from "../img/chevron-down.png";

const Collapse = ({ title, content, containerWidth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const containerStyle = {
    width: containerWidth,
  };

  return (
    <div className="collapse-container">
      <div
        className={`collapse ${isOpen ? "open" : ""}`}
        style={containerStyle}
      >
        <div className="collapse-header" onClick={handleToggle}>
          <h3>{title}</h3>
          <img
            src={chevronDown}
            alt="chevron"
            className={`chevron-${isOpen ? "up" : "down"}`}
          ></img>
        </div>
        {isOpen && (
          <div className="collapse-content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  containerWidth: PropTypes.string.isRequired,
};

export default Collapse;
