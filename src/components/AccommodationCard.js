import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AccommodationCard = ({ accommodationListings }) => {
  return (
    <>
      {/* map pour itérer sur chaque element de la props */}
      {accommodationListings.map((accommodation, index) => (
        // identification de chaque element
        <div key={index}>
          {/* lien vers la page de l'hébergement */}
          <Link to={`/accommodation/${accommodation.id}`}>
            <div className="card">
              {/* image de couverture de l'hébergement */}
              <img src={accommodation.cover} alt="cover" />
              {/* titre de l'hébergement */}
              <h2 className="card-title">{accommodation.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

// definition des props
AccommodationCard.propTypes = {
  accommodationListings: PropTypes.array.isRequired,
};

export default AccommodationCard;
