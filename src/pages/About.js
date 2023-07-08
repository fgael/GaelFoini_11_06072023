import React from "react";
import Banner from "../components/Banner";
import Expander from "../components/Expander";
import aboutBannerImg from "../img/about-banner.png";

const About = () => {
  return (
    <div>
      <Banner bannerImg={aboutBannerImg} />
      <Expander
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        containerWidth="1024px"
      />
      <Expander
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        containerWidth="1024px"
      />
      <Expander
        title="Service"
        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        containerWidth="1024px"
      />
      <Expander
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
        chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
        cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        containerWidth="1024px"
      />
    </div>
  );
};

export default About;
