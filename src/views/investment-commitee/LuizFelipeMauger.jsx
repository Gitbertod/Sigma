import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const LuizFelipeMauger = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("LuizFelipeMauger.LuizFelipeTitle")}
        text={
          <>
            {t("LuizFelipeMauger.LuizFelipeText")}
          </>
        }
        imgSrc="/luis-felipe-mauger.jpg"
      />
    </>
  );
};

export default LuizFelipeMauger;

