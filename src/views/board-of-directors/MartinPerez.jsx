import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const MartinPerez = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("MartinPerez.MartinPerezTitle")}
        text={t("MartinPerez.MartinPerezText")}
        imgSrc="/martin-perez.jpg"
      />
    </>
  );
};

export default MartinPerez;

