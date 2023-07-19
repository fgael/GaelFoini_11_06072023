import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAccommodationById } from "../services/fetchAPI";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Expander from "../components/Expander";

const Accommodation = () => {
  // récupération de l'id depuis l'URL à l'aide de useParams
  const { id } = useParams();

  // utilisation du hook useNavigate fourni par react-router-dom
  const navigate = useNavigate();

  // définition des variables d'état à l'aide du hook useState
  const [accommodation, setAccommodation] = useState({});
  const [loading, setLoading] = useState(true);

  // fonction asynchrone pour récupérer les données d'hébergement par l'id avec useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        // récupération des données d'hébergement par l'id
        const data = await fetchAccommodationById(id);
        // vérification si l'id correspond à un élément dans les données
        if (data === undefined) {
          // redirection vers la page d'erreur 404 en cas d'id non valide
          navigate("/Error404");
        } else {
          // mise à jour des états avec les nouvelles données
          setAccommodation(data);
          setLoading(false);
        }
      } catch (error) {
        // gestion des erreurs lors de la récupération des données
        console.error("Error fetching accommodation data:", error);
      }
    };

    // appel de la fonction asynchrone fetchData au montage de la page (et lorsque l'id change)
    fetchData();
  }, [id, navigate]);

  // si loading est true, cela signifie que les données ne sont pas encore chargées
  if (loading) {
    return null;
  }

  // si loading est false, cela signifie que les données ont été chargées avec succès
  return (
    <div className="accommodation-container">
      {/* appel du composant carrousel pour afficher les images de l'hébergement */}
      <Carrousel accommodation={accommodation} />
      <div className="main-top-container">
        <div>
          <h2>{accommodation.title}</h2>
          <h4 className="location">{accommodation.location}</h4>
          {/* appel du composant tag pour afficher les tags de l'hébergement */}
          <Tag tagList={accommodation.tags} />
        </div>
        <div className="main-top-container-right">
          <div className="host">
            <h4 className="host-name">{accommodation.host.name}</h4>
            <img
              className="host-picture"
              src={accommodation.host.picture}
              alt="host"
            ></img>
          </div>
          {/* appel du composant rating pour afficher le rating de l'hébergement */}
          <Rating rating={accommodation.rating} />
        </div>
      </div>
      <div className="expander-container-accommodation">
        {/* appel du composant expander avec des props fourni pour personnaliser le composant */}
        <Expander
          title="Description"
          content={accommodation.description}
          containerWidth="582px"
          titleFontStyle="18px"
          paragraphFontStyle="18px"
        />
        <Expander
          title="Equipements"
          content={accommodation.equipments.map((equipment, index) => (
            // creation d'un element DOM avec React.Fragment sans creer de noeud supplementaire
            <React.Fragment key={index}>
              {equipment}
              <br />
            </React.Fragment>
          ))}
          containerWidth="582px"
          titleFontStyle="18px"
          paragraphFontStyle="18px"
        />
      </div>
    </div>
  );
};

export default Accommodation;
