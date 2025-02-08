import styles from "./News.module.css";
import { CarouselComponent } from "../carrusel/CarouselComponent";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.newsContainer}>
      <div className="flex justify-center flex-col items-center py-11">
        <img src="./SigmaLogo.svg" className="max-w-64" alt={t("NewsSection.NewsLogoAlt")} />
        <h2 className="py-6 text-5xl text-pink-900 flex ml-2">{t("NewsSection.NewsTitle")}</h2>
      </div>
      <CarouselComponent />
    </div>
  );
};

export default News;
