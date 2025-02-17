import React from "react";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../assets/camion.mp4";
import NavBar from "../../components/navbar/NavBar";
import CardProfile from "../../components/card-profile/CardProfile";
import LeasOp from "../../components/leas-op/LeasOp";
import styles from "./ManagedFunds.module.css";
import { useTranslation } from "react-i18next";

const ManagedFunds = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <CategoryWithBackgroundVideo
        title={t("ManagedFunds.ManagedFundsTitle")}
        videoSrc={video_bg}
        text={
          <>
            {t("ManagedFunds.ManagedFundsText")}
          </>
        }
        childComponent={
          <div className={styles.container}>
            <LeasOp
              title={t("ManagedFunds.LeasOpI")}
              itemList={
                <>
                  <li>{t("ManagedFunds.LeasOpIDescription1")}</li>
                  <li>{t("ManagedFunds.LeasOpIDescription2")}</li>
                  <li>{t("ManagedFunds.LeasOpIDescription3")}</li>
                  <li>{t("ManagedFunds.LeasOpIDescription4")}</li>
                </>
              }
            />
            <LeasOp
              title={t("ManagedFunds.LeasOpII")}
              itemList={
                <>
                  <li>{t("ManagedFunds.LeasOpIIDescription1")}</li>
                  <li>{t("ManagedFunds.LeasOpIIDescription2")}</li>
                  <li>{t("ManagedFunds.LeasOpIIDescription3")}</li>
                </>
              }
            />
            <LeasOp
              title={t("ManagedFunds.LeasOpIII")}
              itemList={
                <>
                  <li>{t("ManagedFunds.LeasOpIIIDescription1")}</li>
                  <li>{t("ManagedFunds.LeasOpIIIDescription2")}</li>
                  <li>{t("ManagedFunds.LeasOpIIIDescription3")}</li>
                </>
              }
            />
            <LeasOp
              title={t("ManagedFunds.LeasOpV")}
              itemList={
                <>
                  <li>{t("ManagedFunds.LeasOpVDescription1")}</li>
                  <li>{t("ManagedFunds.LeasOpVDescription2")}</li>
                </>
              }
            />
            <LeasOp
              title={t("ManagedFunds.LeasOpVI")}
              itemList={
                <>
                  <li>{t("ManagedFunds.LeasOpVIDescription1")}</li>
                  <li>{t("ManagedFunds.LeasOpVIDescription2")}</li>
                  <li>{t("ManagedFunds.LeasOpVIDescription3")}</li>
                </>
              }
            />
          </div>
        }
      />
    </>
  );
};

export default ManagedFunds;
