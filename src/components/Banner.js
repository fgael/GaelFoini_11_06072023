import React from "react";
import PropTypes from "prop-types";

const Banner = ({ bannerImg, title, customHeight }) => {
  // vérification de la largeur de l'écran
  const isResponsive = window.innerWidth <= 768;

  return (
    <div className="banner">
      <img
        src={bannerImg}
        alt="Banner"
        style={{ height: isResponsive ? customHeight : "" }}
      />
      {/* affichage du titre uniquement si props fourni */}
      {title && <h1>{title}</h1>}
    </div>
  );
};

// definition des props
Banner.propTypes = {
  bannerImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  customHeight: PropTypes.string,
};

export default Banner;
