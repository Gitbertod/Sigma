import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

const IrzioPinasco = () => {
  return (
    <>
      <NavBar></NavBar>
      <SectionComponent
        title="Irzio Pinasco"
        text={
          <>
            Serving as Director at SIGMA SAFI S.A and Banco de Crédito del Perú,
            Irzio holds a BA in Economics from Brown University and an MBA from
            Columbia University.{" "}
          </>
        }
        imgSrc="/irzio-pinasco.jpg"
      />
    </>
  );
};

export default IrzioPinasco;
