import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const IrzioPinasco = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("IrzioPinasco.IrzioPinascoTitle")}
        text={<>{t("IrzioPinasco.IrzioPinascoText")}</>}
        imgSrc="/irzio-pinasco.jpg"
      />
    </>
  );
};

export default IrzioPinasco;

