import React from "react";
import { useParams } from "react-router-dom";

const Accommodation = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Page d'hébergement pour l'ID : {id}</h2>
      {/* Ajoutez ici le reste du contenu de votre page d'hébergement */}
    </div>
  );
};

export default Accommodation;
