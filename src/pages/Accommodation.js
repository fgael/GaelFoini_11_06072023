import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAccommodationById } from "../services/fetchAPI";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Expander from "../components/Expander";

const Accommodation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccommodationById(id);
        if (data === undefined) {
          navigate("/Error404");
        } else {
          setAccommodation(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching accommodation data:", error);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (loading) {
    return null;
  }

  return (
    <div className="accommodation-container">
      <Carrousel accommodation={accommodation} />
      <div className="main-top-container">
        <div>
          <h2>{accommodation.title}</h2>
          <h4 className="location">{accommodation.location}</h4>
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
          <Rating rating={accommodation.rating} />
        </div>
      </div>
      <div className="expander-container-accommodation">
        <Expander
          title="Description"
          content="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et 
          à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de 
          nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. 
          Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
          containerWidth="582px"
          titleFontStyle="18px"
          paragraphFontStyle="18px"
        />
        <Expander
          title="Equipements"
          content={accommodation.equipments.map((equipment, index) => (
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
