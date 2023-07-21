import React, { useState } from "react";
import chevronLeft from "../img/icons/chevron-left.svg";
import chevronRight from "../img/icons/chevron-right.svg";

const Carrousel = ({ accommodation }) => {
  // definition des variables d'etat à l'aide du hook useState
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // fonction pour passer vers l'image précédente
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? accommodation.pictures.length - 1 : prevIndex - 1
    );
  };

  // fonction pour passer vers l'image suivante
  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % accommodation.pictures.length
    );
  };

  /* détermination de la position actuelle dans le carroussel */
  const currentPosition = `${currentImageIndex + 1}/${
    accommodation.pictures.length
  }`;

  // ne pas afficher de carrousel si accommodation est vide
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
