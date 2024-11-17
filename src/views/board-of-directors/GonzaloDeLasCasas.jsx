import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const GonzaloDeLasCasas = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("GonzaloDeLasCasas.GonzaloDeLasCasasTitle")}
        text={<>{t("GonzaloDeLasCasas.GonzaloDeLasCasasText")}</>}
        imgSrc="/gonzalo-de-las-casas.jpg"
      />
    </>
  );
};

export default GonzaloDeLasCasas;
