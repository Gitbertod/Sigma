import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

export const ArturoPalomares = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("ArturoPalomares.ArturoPalomaresTitle")}
        text={
          <>
            {t("ArturoPalomares.ArturoPalomaresText")}
          </>
        }
        imgSrc="/arturo-palomares.jpg"
      />
    </>
  );
};
