import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

const KarenAmes = () => {
  return (
    <>
    
    <NavBar/>
    <SectionComponent
      title="Karen Ames"
      text={
        <>
          An executive with more than 15 years of experience in the Financial
          Sector, Karen currently serves as Vice President of Legal Affairs &
          Compliance at Sigma SAFI. Throughout her professional journey, she has
          garnered expertise in Corporate Law, Insurance, Finance, and Capital
          Markets. Karen's legal career includes positions in the Counseling and
          Contracts Area of the Legal Division at Rímac Internacional Cía. de
          Seguros y Reaseguros S.A. She is a graduate of the Universidad Peruana
          de Ciencias Aplicadas, holding a Master's Degree in Law (LLM) from
          Northwestern University, along with certifications in management from
          IE University and Yale University.
        </>
      }
      imgSrc="/karen-ames.jpg"
    ></SectionComponent>
    </>
  );
};

export default KarenAmes;
