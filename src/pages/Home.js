import React, { useEffect, useState } from "react";
import { fetchAccommodationListings } from "../services/fetchAPI";
import Banner from "../components/Banner";
import AccommodationCard from "../components/AccommodationCard";
import homeBanner from "../assets/img/home-banner.png";

const Home = () => {
  // definition des varariables d'etat à l'aide du hook useState
  const [accommodationListings, setAccommodationListings] = useState([]);
  const [loading, setLoading] = useState(true);

  // fonction asynchrone pour récupérer les données d'hébergement
  useEffect(() => {
    const fetchData = async () => {
      try {
        // récupération des données d'hébergement
        const data = await fetchAccommodationListings();
        // mise à jours des etats avec les nouvelles données
        setAccommodationListings(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching accommodation listings:", error);
      }
    };
    // appel de la fonction fetchData
    fetchData();
  }, []);

  // si loading est false, cela signifie que les données ont été chargées avec succès
  if (loading) {
    return null;
  }

  return (
    <div className="home-container">
      {/* appel du composant banner avec props fourni */}
      <Banner bannerImg={homeBanner} title="Chez vous, partout et ailleurs" />
      {/* container grid */}
      <div className="grid-container">
        <div className="grid">
          {/* appel du composant accommodation card */}
          <AccommodationCard accommodationListings={accommodationListings} />
        </div>
      </div>
    </div>
  );
};

export default Home;
