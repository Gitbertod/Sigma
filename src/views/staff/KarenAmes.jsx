import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const KarenAmes = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("KarenAmes.KarenAmesTitle")}
        text={
          <>
            {t("KarenAmes.KarenAmesText")}
          </>
        }
        imgSrc="/karen-ames.jpg"
      />
    </>
  );
};

export default KarenAmes;

