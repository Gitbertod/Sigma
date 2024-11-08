import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

const ManuelSalazar = () => {
  return (
    <>
      <NavBar></NavBar>
      <SectionComponent
        title="Manuel Salazar"
        text={
          <>
            An executive with over 30 years of experience in finance and
            industry, Manuel served as CEO of Pesquera Diamante from 2007 to
            2018. His extensive experience includes over 15 years at Citibank
            del Perú, where he served as Director of Corporate and Investment
            Banking and was a member of the Executive Committee. Manuel held the
            esteemed position of Business Senior Credit Officer and also served
            as General Manager and President of Citileasing S.A. He holds a
            bachelor’s degree in business administration from Universidad del
            Pacífico, with specializations in Finance and Marketing. Manuel
            completed the Programa de Alta Dirección (PAD) at Universidad de
            Piura and the Programa de Dirección de Empresas at Pacífico Business
            School in 2019.
          </>
        }
        imgSrc="/manuel-salazar.jpg"
      />
    </>
  );
};

export default ManuelSalazar;
