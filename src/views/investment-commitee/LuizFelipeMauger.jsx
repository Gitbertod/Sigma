import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

const LuizFelipeMauger = () => {
  return (
    <>
      <NavBar></NavBar>
      <SectionComponent
        title="Luiz Felipe Mauger"
        text={
          <>
            Mr. Mauger brings over 25 years of experience in the international
            finance system. Holding a specialization in Marketing and Finance
            from the Fundacao Armando Alvares Penteado University of Sao Paulo -
            Brazil, he further enhanced his skills with specializations in the
            European Common Market from the Porto de Lisboa University -
            Portugal. Additionally, he holds certifications in Strategy
            Management and Macroeconomics from Harvard University. Mr. Mauger
            has a Global MBA from Duke University and has served in senior
            management roles at BankBoston and HSBC Bank in various locations.
          </>
        }
        imgSrc="/luis-felipe-mauger.jpg"
      />
    </>
  );
};

export default LuizFelipeMauger;
