import React, { useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import { CardComponent } from "../../components/card/CardComponent";
import styles from "./News.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  const newsItems = [
    {
      title: t("News.Item1.Title"),
      photo: "./news/xv_latam_leasing.jpg",
    },
    {
      title: t("News.Item2.Title"),
      photo: "./news/Mario_Firmando_v2.jpg",
      link: "https://www.desdeadentro.pe/2024/04/luz-del-sur-recibe-formalmente-parques-eolicos-tres-hermanas-y-marcona/",
    },
    {
      title: t("News.Item3.Title"),
      photo: "./news/news1.jpeg",
    },
    {
      title: t("News.Item4.Title"),
      photo: "./news/noticia.png",
      link: "https://gestion.pe/economia/empresas/luz-del-sur-invertira-us-90-millones-en-peru-para-nuevos-proyectos-de-energia-renovable-noticia/",
    },
    {
      title: t("News.Item5.Title"),
      photo: "./news/sigmafinance.jpg",
    },
    {
      title: t("News.Item6.Title"),
      photo: "./news/the_legal_500.png",
    },
    {
      title: t("News.Item7.Title"),
      photo: "./news/noticia_default.jpg",
      text: t("News.Item7.Date"),
    },
    {
      title: t("News.Item8.Title"),
      photo: "./news/noticia_default.jpg",
      text: t("News.Item8.Date"),
    },
    {
      title: t("News.Item9.Title"),
      photo: "./news/noticia_default.jpg",
      text: t("News.Item9.Date"),
    },
    {
      title: t("News.Item10.Title"),
      photo: "./news/noticia_default.jpg",
      text: t("News.Item10.Date"),
    },
    {
      title: t("News.Item11.Title"),
      photo: "./news/noticia_default.jpg",
      text: t("News.Item11.Date"),
    },
    {
      title: t("News.Item12.Title"),
      photo: "./news/certificate.jpg",
      text: t("News.Item12.Date"),
    },
    {
      title: t("News.Item13.Title"),
      photo: "./news/noticia_default.jpg",
    },
    {
      title: t("News.Item14.Title"),
      photo: "./news/entrevista-cs.png",
      text: t("News.Item14.Date"),
    },
    {
      title: t("News.Item15.Title"),
      photo: "./news/noticia_20032015.png",
      text: t("News.Item15.Date"),
    },
    {
      title: t("News.Item16.Title"),
      photo: "./news/entrevista-cs-10032015.jpg",
      text: t("News.Item16.Date"),
    },
    {
      title: t("News.Item17.Title"),
      photo: "./news/noticia_20082014.jpg",
    },
    {
      title: t("News.Item18.Title"),
      photo: "./news/noticia_28052014.jpg",
    },
  ];

  return (
    <>
      <NavBar />
      <div className={styles.mainContainer}>
        <h2 className={styles.h2}>{t("News.Title")}</h2>
        <div className={styles.cards}>
          {newsItems.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="2000">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <CardComponent title={item.title} photo={item.photo} text={item.text} />
                </a>
              ) : (
                <CardComponent title={item.title} photo={item.photo} text={item.text} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;

