import React from "react";
import NavBar from "../../components/navbar/NavBar";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import styles from "./InfrastructurePrivateEquityMF.module.css";
import video_bg from "../../assets/eolico.mov";
import { useTranslation } from "react-i18next";

const InfrastructurePrivateEquityMF = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <CategoryWithBackgroundVideo
        videoSrc={video_bg}
        title={t("InfrastructurePrivateEquityMF.ManagedFundsTitle")}
        text={
          <>
            <h2 className={styles.subtitle}>
              {t("InfrastructurePrivateEquityMF.InfrastructurePrivateEquityFundTitle")}
            </h2>
            <ul>
              <li className={styles.lista}>
                {t("InfrastructurePrivateEquityMF.FundLaunchDetails")}
              </li>
              <li className={styles.lista}>
                {t("InfrastructurePrivateEquityMF.InvestorDetails")}
              </li>
              <li className={styles.lista}>
                {t("InfrastructurePrivateEquityMF.InvestmentFocus")}
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default InfrastructurePrivateEquityMF;
