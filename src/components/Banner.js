import React from "react";
import PropTypes from "prop-types";

const Banner = ({ bannerImg, title }) => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Banner" />
      {/* affichage du titre uniquement si props fourni */}
      {title && <h1>{title}</h1>}
    </div>
  );
};

// definition des props
Banner.propTypes = {
  bannerImg: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Banner;
