import React from "react";
import star from "../assets/icons/star.svg";

const Rating = ({ rating }) => {
  const stars = [];
  // boucle pour générer les étoiles avec une classe active en fonction de leur rating
  // la classe active est généré par rapport au rating ( condition ternaire i < rating)
  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        src={star}
        alt="étoile"
        className={i < rating ? "star active" : "star"}
        key={i}
      />
    );
  }

  return <div className="rating-container">{stars}</div>;
};

export default Rating;
