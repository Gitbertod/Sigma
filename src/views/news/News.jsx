import React, { useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import { CardComponent } from "../../components/card/CardComponent";
import styles from "./News.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const News = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  const newsItems = [
    {
      id: "news-1",
      title: t("News.Item1.Title"),
      photo: "./news/xv_latam_leasing.jpg",
    },
    {
      id: "news-2",
      title: t("News.Item2.Title"),
      photo: "./news/Mario_Firmando_v2.jpg",
      link: "https://www.desdeadentro.pe/2024/04/luz-del-sur-recibe-formalmente-parques-eolicos-tres-hermanas-y-marcona/",
    },
    {
      id: "news-3",
      title: t("News.Item3.Title"),
      photo: "./news/news1.jpeg",
    },
    {
      id: "news-4",
      title: t("News.Item4.Title"),
      photo: "./news/noticia.png",
      link: "https://gestion.pe/economia/empresas/luz-del-sur-invertira-us-90-millones-en-peru-para-nuevos-proyectos-de-energia-renovable-noticia/",
    },
    {
      id: "news-5",
      title: t("News.Item5.Title"),
      photo: "./news/sigmafinance.jpg",
    },
    {
      id: "news-6",
      title: t("News.Item6.Title"),
      photo: "./news/the_legal_500.png",
    },
    {
      id: "news-7",
      title: t("News.Item7.Title"),
      photo: "./news/noticia_default.jpg",
      text: t("News.Item7.Date"),
    },
    {
      id: "news-8",
      title: t("News.Item8.Title"),
      photo: "./news/noticia_default.jpg",
      text: t("News.Item8.Date"),
    },
    {
      id: "news-9",
      title: t("News.Item9.Title"),
      photo: "./news/noticia_default.jpg",
      text: t("News.Item9.Date"),
    },
    {
      id: "news-10",
      title: t("News.Item10.Title"),
      photo: "./news/noticia_default.jpg",
      text: t("News.Item10.Date"),
    },
    {
      id: "news-11",
      title: t("News.Item11.Title"),
      photo: "./news/noticia_default.jpg",
      text: t("News.Item11.Date"),
    },
    {
      id: "news-12",
      title: t("News.Item12.Title"),
      photo: "./news/certificate.jpg",
      text: t("News.Item12.Date"),
    },
    {
      id: "news-13",
      title: t("News.Item13.Title"),
      photo: "./news/noticia_default.jpg",
    },
    {
      id: "news-14",
      title: t("News.Item14.Title"),
      photo: "./news/entrevista-cs.png",
      text: t("News.Item14.Date"),
    },
    {
      id: "news-15",
      title: t("News.Item15.Title"),
      photo: "./news/noticia_20032015.png",
      text: t("News.Item15.Date"),
    },
    {
      id: "news-16",
      title: t("News.Item16.Title"),
      photo: "./news/entrevista-cs-10032015.jpg",
      text: t("News.Item16.Date"),
    },
    {
      id: "news-17",
      title: t("News.Item17.Title"),
      photo: "./news/noticia_20082014.jpg",
    },
    {
      id: "news-18",
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
        {newsItems.map((item) => (
          <div key={item.id} data-aos="fade-up" data-aos-duration="2000">
            {item.link ? (
              // Si hay un enlace externo, usa <a>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <CardComponent title={item.title} photo={item.photo} text={item.text} />
              </a>
            ) : (
              // Usa <Link> para noticias con rutas internas
              <Link to={`/news/${item.id}`}>
                <CardComponent title={item.title} photo={item.photo} text={item.text} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default News;

