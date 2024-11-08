import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

const GuillermoTeramura = () => {
  return (
    <>
      <NavBar></NavBar>
      <SectionComponent
        title="Guillermo Teramura Miyashiro"
        imgSrc="/guillermo-teramura.jpg"
        text={
          <>
            With over 15 years of experience in the financial sector, Guillermo
            has demonstrated proficiency in strategic planning, commercial
            operations, product development, and project management. His career
            includes roles such as Head of Planning for the Personal Banking
            division of HSBC Peru, Commercial Director at Hermes Transportes
            Blindados, and Foreign Trade Product Specialist and Project
            Coordinator at Scotiabank Peru. Guillermo holds a Bachelor's degree
            in Industrial Engineering from Universidad de Lima and an MBA from
            Hult International Business School in Boston, USA.
          </>
        }
      />
    </>
  );
};

export default GuillermoTeramura;
