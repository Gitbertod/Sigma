import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

const CraigCarletonSmith = () => {
  return (
    <>
      <NavBar></NavBar>
      <SectionComponent
        title="Craig Smith de Souza"
        text={
          <>
            With a career spanning over 20 years, Mr. Smith has provided banking
            services in Latam, Europe, and the US. Before founding SIGMA, he
            served as Sr. VP at BankBoston´s Commercial Banking Division in
            Peru, managing the Treasury, Asset-Based Finance, Foreign Commerce,
            SME, and Financial Institutions teams. His international experience
            includes roles such as Treasury Manager at the Treasury Group for
            Europe & The Far East at Electronic Data Systems in London. Mr.
            Smith holds a BA in Economics from Texas A&M University and an MBA
            degree from Duke University.
          </>
        }
        imgSrc="/craig-smith.jpg"
      />
    </>
  );
};

export default CraigCarletonSmith;
