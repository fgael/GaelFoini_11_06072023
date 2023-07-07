import React from "react";

const Banner = ({ bannerImg, title }) => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Banner" />
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default Banner;
