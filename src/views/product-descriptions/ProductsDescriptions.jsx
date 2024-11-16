import React from "react";
import NavBar from "../../components/navbar/NavBar";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import styles from "./ProductsDescriptions.module.css";
import video_bg from "../../assets/productDescription.mov";
import { useTranslation } from "react-i18next";

const ProductsDescriptions = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <CategoryWithBackgroundVideo
        videoSrc={video_bg}
        title={t("ProductDescription.ProductDescriptionTitle")}
        text={
          <>
            {t("ProductDescription.ProductDescriptionText")}
            <ul className={styles.lista}>
              <li>
                <strong>{t("ProductDescription.LeaseRenewableContract")}</strong> {t("ProductDescription.LeaseRenewableContractDesc")}
              </li><br />
              <li>
                <strong>{t("ProductDescription.QuotaBasedOnValue")}</strong> {t("ProductDescription.QuotaBasedOnValueDesc")}
              </li><br />
              <li>
                <strong>{t("ProductDescription.SpecializedMaintenance")}</strong> {t("ProductDescription.SpecializedMaintenanceDesc")}
              </li><br />
              <li>
                <strong>{t("ProductDescription.SupportForProjects")}</strong> {t("ProductDescription.SupportForProjectsDesc")}
              </li><br />
              <li>
                <strong>{t("ProductDescription.CustomizedStructures")}</strong> {t("ProductDescription.CustomizedStructuresDesc")}
              </li><br />
              <li>
                <strong>{t("ProductDescription.ContractualSimplicity")}</strong> {t("ProductDescription.ContractualSimplicityDesc")}
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default ProductsDescriptions;

