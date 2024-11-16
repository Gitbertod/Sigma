import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const AnaMariaBitar = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("AnaMariaBitar.AnaMariaTitle")}
        text={
          <>
            {t("AnaMariaBitar.AnaMariaText")}
          </>
        }
        imgSrc="/ana-maria-bitar.jpg"
      />
    </>
  );
};

export default AnaMariaBitar;
