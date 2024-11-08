import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

const GonzaloDeLasCasas = () => {
  return (
    <>
      <NavBar></NavBar>
      <SectionComponent
        title="Gonzalo De Las Casas"
        text={
          <>
            General Manager of SIGMA Capital, specializing in Infrastructure
            Investment projects, Gonzalo has served in leadership roles at AFP
            Integra. He graduated in Business Administration with a
            specialization in Finance from The University of Texas and holds an
            MBA from the University of Piura.
          </>
        }
        imgSrc="/gonzalo-de-las-casas.jpg"
      />
    </>
  );
};

export default GonzaloDeLasCasas;
