import React from "react";
import { Link } from "react-router-dom";

const AccommodationCard = ({ accommodationListings }) => {
  return (
    <>
      {accommodationListings.map((accommodation, index) => (
        <div key={index}>
          <Link to={`/accommodation/${accommodation.id}`}>
            <div className="card">
              <img src={accommodation.cover} alt="cover" />
              <h2 className="card-title">{accommodation.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default AccommodationCard;
