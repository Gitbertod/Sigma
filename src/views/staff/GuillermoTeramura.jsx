import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const GuillermoTeramura = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("GuillermoTeramura.GuillermoTeramuraTitle")}
        text={
          <>
            {t("GuillermoTeramura.GuillermoTeramuraText")}
          </>
        }
        imgSrc="/guillermo-teramura.jpg"
      />
    </>
  );
};

export default GuillermoTeramura;
