import React, { useEffect, useState } from "react";
// import fetch service
import { fetchAccommodationListings } from "../services/fetchAPI";
// import components
import Banner from "../components/Banner";
import AccommodationCard from "../components/AccommodationCard";
// import img
import homeBanner from "../img/home-banner.png";

const Home = () => {
  const [accommodationListings, setAccommodationListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccommodationListings();
        setAccommodationListings(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching accommodation listings:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="home-container">
      <Banner bannerImg={homeBanner} title="Chez vous, partout et ailleurs" />
      <div className="grid-container">
        <div className="grid">
          <AccommodationCard accommodationListings={accommodationListings} />
        </div>
      </div>
    </div>
  );
};

export default Home;
