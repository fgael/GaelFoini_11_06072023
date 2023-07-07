import React from "react";

const Banner = ({ bannerImg }) => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Banner" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
