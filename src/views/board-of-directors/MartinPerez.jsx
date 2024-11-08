import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

const MartinPerez = () => {
  return (
    <>
      <NavBar></NavBar>
      <SectionComponent
        title="Martin Pérez"
        text="With 23 years of diverse executive experience, 
        Martin served as Congressman and Minister of Foreign 
        Trade and Tourism. Currently a Director at various organizations,
         he holds degrees in Business Administration, Marketing, and Finance."
      imgSrc="/martin-perez.jpg"
      />
      
    </>
  );
};

export default MartinPerez;
