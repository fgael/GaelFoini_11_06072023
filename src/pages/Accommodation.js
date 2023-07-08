import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAccommodationById } from "../services/fetchAPI";
import Carrousel from "../components/Carrousel";

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

  console.log(accommodation);

  if (loading) {
    return null;
  }

  return (
    <div className="accommodation-container">
      <Carrousel accommodation={accommodation} />
      <h2>{accommodation.title}</h2>
      <h4>{accommodation.location}</h4>
    </div>
  );
};

export default Accommodation;
