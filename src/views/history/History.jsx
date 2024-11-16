import { TimeLine } from "../../components/time-line/TimeLine";
import styles from "./History.module.css";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const History = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.title}>{t("HistoryTitle")}</div>
        <div className={styles.content}>
          <img src="./sigmaCircle.svg" className={styles.symbol} alt="Sigma Logo" />
          <TimeLine />
        </div>
      </div>
    </>
  );
};

export default History;

