import React from "react";
import NavBar from "../../components/navbar/NavBar";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import { GiMoneyStack } from "react-icons/gi";
import styles from "./OperatingLease.module.css";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { GiPodiumWinner } from "react-icons/gi";
import CategoryBox from "../../components/category-box/CategoryBox";
import video_bg from "../../assets/oleoducto.mov";
import { useTranslation } from "react-i18next";

const OperatingLease = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <CategoryWithBackgroundVideo
        videoSrc={video_bg}
        title={t("OperatingLease.OperatingLeaseTitle")}
        childComponent={
          <div className={styles.containerCategories}>
            <CategoryBox
              icon={<GiMoneyStack className={styles.icon} />}
              title={t("OperatingLease.OperatingLeaseManagedFunds")}
              link="/managed-funds"
            />
            <CategoryBox
              icon={<HiOutlineDocumentSearch className={styles.icon} />}
              title={t("OperatingLease.OperatingLeaseProductDescription")}
              link="/product-description"
            />
            <CategoryBox
              icon={<GiPodiumWinner className={styles.icon} />}
              title={t("OperatingLease.OperatingLeaseAdvantages")}
              link="/advantages"
            />
          </div>
        }
      />
    </>
  );
};

export default OperatingLease;



