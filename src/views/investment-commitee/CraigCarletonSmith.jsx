import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const CraigCarletonSmith = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("CraigCarleton.CraigTitle")}
        text={
          <>
            {t("CraigCarleton.CraigText")}
          </>
        }
        imgSrc="/craig-smith.jpg"
      />
    </>
  );
};

export default CraigCarletonSmith;
