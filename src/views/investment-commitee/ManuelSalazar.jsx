import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const ManuelSalazar = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <SectionComponent
        title={t("ManuelSalazar.ManuelSalazarTitle")}
        text={<>{t("ManuelSalazar.ManuelSalazarText")}</>}
        imgSrc="/manuel-salazar.jpg"
      />
    </>
  );
};

export default ManuelSalazar;
