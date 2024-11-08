import React from "react";
import NavBar from "../../components/navbar/NavBar";
import SectionComponent from "../../components/section-component/SectionComponent";

const KatherineReyes = () => {
  return (
    <>
      <NavBar />
      <SectionComponent
        title="Katherine Reyes Warthon"
        text={
          <>
            An executive boasting over 23 years of experience in the Financial
            Sector, Katherine held the pivotal role of Manager at the Risk
            Division of Wholesale Banking at Banco Financiero del Peru (Now
            Banco Pichincha). Here, her responsibilities included the management
            and evaluation of the client portfolio. Prior to this, she served as
            the Deputy Manager of Corporate Banking at HSBC Bank Peru and as
            Deputy Assistant Manager of Senior Corporate Banking at the Banco de
            Credito del Peru. She holds a license in Industrial Engineering from
            the Pontificia Universidad Católica del Perú and an MBA specialized
            in Corporate Finance from IE Business School in Madrid, Spain.
          </>
        }
        imgSrc="/katherine-reyes.jpg"
      />
    </>
  );
};

export default KatherineReyes;
