import React from "react";
import NavBar from "../../components/navbar/NavBar";
import SectionComponent from "../../components/section-component/SectionComponent";
import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const KatherineReyes = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("KatherineReyes.KatherineReyesTitle")}
        text={
          <>
            {t("KatherineReyes.KatherineReyesText")}
          </>
        }
        imgSrc="/katherine-reyes.jpg"
      />
    </>
  );
};

export default KatherineReyes;
