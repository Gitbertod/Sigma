import { GiMoneyStack } from "react-icons/gi";
import styles from "./DataBoxIcons.module.css";
import MiniDataInfo from "../mini-data-info/MiniDataInfo";
import { GiPodiumWinner } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const DataBoxIcons = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.slidebottom}>
      <div className={styles.dataInfoContainer}>
        <MiniDataInfo
          title={t("DataBoxIcon.experience")}
          text={t("DataBoxIcon.experienceText")}
          whiteLine={<div className={styles.whiteLine}></div>}
          icon={<img src="/experience.svg" className={styles.icon} />}
        />
        <MiniDataInfo
          icon={<GiMoneyStack className={styles.icon} />}
          title={"$1650MM"}
          text={t("DataBoxIcon.investedCapitalText")}
          whiteLine={<div className={styles.whiteLine}></div>}
        />
        <MiniDataInfo
          icon={<GiPodiumWinner className={styles.icon} />}
          title={t("DataBoxIcon.topPosition")}
          text={t("DataBoxIcon.topPositionText")}
        />
      </div>
    </div>
  );
};

export default DataBoxIcons;
