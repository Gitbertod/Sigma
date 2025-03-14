import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../../components/navbar/NavBar";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../assets/ventajas.mp4";
import styles from "./Advantages.module.css";

const Advantages = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar />
      <CategoryWithBackgroundVideo
        title={t("Advantages.Title")}
        videoSrc={video_bg}
        text={
          <>
            <ul className={styles.lista}>
              <li>
                <strong>{t("Advantages.subTilte1")}</strong> {t("Advantages.Paragraph1")}
              </li>
              <br></br>
              <li>
                <strong>{t("Advantages.subTilte2")}</strong>
                {t("Advantages.Paragraph2")}
              </li>
              <br></br>
              <li>
                <strong>{t("Advantages.subTilte3")}</strong>{t("Advantages.Paragraph3")}
              </li>
              <br></br>
              <li>
                <strong>{t("Advantages.subTilte4")}</strong> {t("Advantages.Paragraph4")}
              </li>
              <br></br>
              <li>
                <strong>{t("Advantages.subTilte5")} </strong> {t("Advantages.Paragraph5")}
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default Advantages;
