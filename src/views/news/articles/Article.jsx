import { useParams } from "react-router-dom";
import BlogArticle from "../../../components/blog-article/BlogArticle";
import NavBar from "../../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const Article = () => {
  const { articleId } = useParams(); // Obtiene el parámetro de la URL
  const { t } = useTranslation();

  // Simula una base de datos local
  const articles = {
    "news-1": {
      title: t("Articles.news-1.title"),
      text: t("Articles.news-1.text"  
      ),
      images: ["/news/xv_latam_leasing.jpg"],
    },
    "news-2": {
      title: t("Articles.news-2.title"),
      text: "",
      images: [],
    },
    "news-3": {
      title: t("Articles.news-3.title"),
      text: "",
      images: [
        "/news/cavali1.jpeg",
        "/news/cavali2.jpeg",
        "/news/cavali3.jpeg",
      ],
    },
    "news-4": {
      title: "",
      text: "",
      images: [],
    },
    "news-5": {
      title: t("Articles.news-5.title"),
      text: t("Articles.news-5.text") ,
      images: ["/news/sigmafinance.jpg"],
    },
    "news-6": {
      title: t("Articles.news-6.title"),
      text: t("Articles.news-6.text"),
      images: ["/news/the_legal_500.png"],
    },
    "news-7": {
      title: t("Articles.news-7.title"),
      text: t("Articles.news-7.text"),
      images: ["/news/noticia_default.jpg"],
    },
    "news-8": {
      title: t("Articles.news-8.title"),
      text: t("Articles.news-8.text"),
      images: ["/news/noticia_default.jpg"],
    },
    "news-9": {
      title: t("Articles.news-9.title"),
      text: t("Articles.news-9.text"),
      images: ["/news/noticia_default.jpg"],
    },
    "news-10": {
      title: t("Articles.news-10.title"),
      text: t("Articles.news-10.text"),
      images: ["/news/noticia_default.jpg"],
    },
    "news-11": {
      title: t("Articles.news-11.title"),
      text: t("Articles.news-11.text"),
      images: ["/news/noticia_default.jpg"],
    },
    "news-12": {
      title: t("Articles.news-12.title"),
      text: t("Articles.news-12.text"),
      images: ["/news/certificate.jpg"],
    },
    "news-13": {
      title: t("Articles.news-13.title"),
      text: t("Articles.news-14.title"),
      images: ["/news/noticia_default.jpg"],
    },
    "news-14": {
      title: t("Articles.news-14.title"),
      text: t("Articles.news-14.title"),
      images: ["/news/entrevista-cs.png"],
    },
    "news-15": {
      title: t("Articles.news-15.title"),
      text: t("Articles.news-15.text"),
      images: ["/news/noticia_20032015.png"],
    },
    "news-16": {
      title: t("Articles.news-16.title"),
      text: t("Articles.news-16.text"),
      images: ["/news/entrevista-cs-10032015.jpg"],
    },
    "news-17": {
      title: t("Articles.news-17.title"),
      text: t("Articles.news-17.text"),
      images: ["/news/noticia_20082014.jpg"],
    },
    "news-18": {
      title: t("Articles.news-18.title"),
      text: t("Articles.news-18.text"),
      images: ["/news/noticia_28052014.jpg"],
    },
    // Agregar más artículos aquí...
  };

  const article = articles[articleId];

  if (!article) {
    return <h1>Artículo no encontrado</h1>;
  }

  return (
    <>
      <NavBar />
      <BlogArticle
        title={article.title}
        text={article.text}
        images={article.images}
      />
    </>
  );
};

export default Article;
