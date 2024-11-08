import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

export const ArturoPalomares = () => {
  return (
    <>
      <NavBar></NavBar>
      <SectionComponent
        title="Arturo Palomares"
        imgSrc="/arturo-palomares.jpg"
        text={
          <>
            An executive with over 20 years of experience in the Peruvian
            Financial System and Capital Markets, Arturo has held key positions,
            including Deputy Manager of the Risk Division of Banco Sudamericano
            and Senior Credit Officer of Risk Management at BankBoston Peru. His
            responsibilities involved developing, managing, and controlling the
            Risk Policy for ABF products, such as Leasing, Discounts, Factoring,
            Warrants, and Mortgage Loans for the Corporate Banking and Business
            Banking Segments. Arturo has previous experience in Administration
            and Credit Control, where he was in charge of evaluating and
            classifying the Loan Portfolio and the sufficiency of provisions. He
            is a Certified Public Accountant graduated from Universidad de Lima
            and holds a Master's in Finance from Universidad del Pacífico.
          </>
        }
      />
    </>
  );
};
