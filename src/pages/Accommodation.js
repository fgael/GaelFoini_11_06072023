import React from "react";
import { useParams } from "react-router-dom";

const Accommodation = () => {
  // hook useParams pour accéder aux paramètres de l'URL
  const { id } = useParams();

  return (
    <div>
      <h2>Page d'hébergement pour l'ID : {id}</h2>
    </div>
  );
};

export default Accommodation;
