import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import SectionComponent2 from "../../components/section-component2/SectionComponent2";
import { useTranslation } from "react-i18next";

const WhoWeAre = () => {
  const { t } = useTranslation();

  return (
    <div>
      <NavBar />
      <SectionComponent
        title={t("WhoWeAreTitle")}
        text={t("WhoWeAreText")}
      />
      <SectionComponent2
        text={t("WhoWeAreSectionText")}
      />
    </div>
  );
};

export default WhoWeAre;

