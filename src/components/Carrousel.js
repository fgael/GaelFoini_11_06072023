import React, { useState } from "react";
import chevronLeft from "../img/icons/chevron-left.svg";
import chevronRight from "../img/icons/chevron-right.svg";

const Carrousel = ({ accommodation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? accommodation.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % accommodation.pictures.length
    );
  };

  const currentPosition = `${currentImageIndex + 1}/${
    accommodation.pictures.length
  }`;

  if (Object.keys(accommodation).length === 0) {
    return null;
  }

  return (
    <div className="carrousel-container">
      <img
        src={accommodation.pictures[currentImageIndex]}
        alt="logement"
        className="accommodation-picture"
      />
      {/* affichage des chevrons et du compteur uniquement si + d'une photo */}
      {accommodation.pictures.length > 1 && (
        <>
          <img
            src={chevronLeft}
            alt="boutton carrousel gauche"
            className="chevron-left"
            onClick={handlePrevImage}
          />
          <img
            src={chevronRight}
            alt="boutton carrousel droite"
            className="chevron-right"
            onClick={handleNextImage}
          />
          <p className="picture-position">{currentPosition}</p>
        </>
      )}
    </div>
  );
};

export default Carrousel;
