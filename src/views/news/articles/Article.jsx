import { useParams } from "react-router-dom";
import BlogArticle from "../../../components/blog-article/BlogArticle";
import NavBar from "../../../components/navbar/NavBar";

const Article = () => {
  const { articleId } = useParams(); // Obtiene el parámetro de la URL

  // Simula una base de datos local
  const articles = {
    "news-1": {
      title:
        "Insightful Discussions on Legal Frameworks, Pandemic Impact, and Leasing Market Trends",
      text: (
        <>
          Our VP in Legal & Compliance Karen Ames, today in the XV Latin
          American Leasing Conference organized by The Alta Group in Miami,
          www.thealtaconferences.com An opportunity to discuss the current state
          of the legal framework, best practices and lessons learned during the
          pandemic in the Leasing Market along with leading legal practitioners
          from Latinoamérica.
        </>
      ),
      images: ["/news/xv_latam_leasing.jpg"],
    },
    "news-2": {
      title: "Luz del Sur formally receives Tres Hermanas and Marcona",
      text: "Descripción detallada del artículo Cavali...",
      images: [
        "/news/cavali1.jpeg",
        "/news/cavali2.jpeg",
        "/news/cavali3.jpeg",
      ],
    },
    "news-3": {
      title: "Cavali Negotiable Invoices and Factoring 2024",
      text: "",
      images: [
        "/news/cavali1.jpeg",
        "/news/cavali2.jpeg",
        "/news/cavali3.jpeg",
      ],
    },
    "news-4": {
      title: "Cavali Negotiable Invoices and Factoring 2024",
      text: "",
      images: [
        "/news/cavali1.jpeg",
        "/news/cavali2.jpeg",
        "/news/cavali3.jpeg",
      ],
    },
    "news-5": {
      title: "Sigma Finance and GRAM unveil U.S. Partnership",
      text: (
        <>
          Sigma Finance and Grupo Romero Asset Management (GRAM) have launched
          their U.S. partnership at the #ABSEast Conference. Focused on building
          relationships, leveraging our long track record in Latin America, and
          expanding our direct lending & asset management footprint in the
          United States in the coming years. Thank you to Information Management
          Network (IMN) and #FIIN for organizing such a great event! Brian Herr
          GRAM www.gr-am.com
        </>
      ),
      images: ["/news/sigmafinance.jpg"],
    },
    "news-6": {
      title: "Karen Ames recognized in GC Powerlist 2023 by The Legal 500",
      text: (
        <>
          We would like to congratulate Karen Ames, our Vice President of Legal
          Affairs and Compliance, who has been included in the GC Powerlist 2023
          published by The Legal 500 (Legalease). We are pleased to have Karen
          as part of our team and that her professionalism and valuable
          contribution to Sigma has received this recognition. Thank you Karen
          for being part of our team, may the successes continue.
        </>
      ),
      images: ["/news/the_legal_500.png"],
    },
    "news-7": {
      title: "Annual Report 2022",
      text: "The year 2022 will be marked as one of the years with greatest uncertainty and volatility in global markets. After the international economic opening due to the accelerated reduction in Covid-19 infections, global economies began to see the effects of economic policies and stimuli that helped overcome one of the worst global health crises that caused quarantines and restrictions around the world. world. These delays in expansionary monetary policies, as well as the prolonged conflict between Russia and Ukraine, and problems in the global supply chain, caused high levels of inflation around the world. Inflation that, during the year 2022, central banks have tried to control with one of the most aggressive rate increases in history.",
      images: ["/news/noticia_default.jpg"],
    },
    "news-8": {
      title: "Annual Report 2021",
      text: "The year 2021 closes as one of the most challenging in recent decades in Peru with the continuation of the global health crisis that had been dragging on since 2020, the strict confinement measures that were applied in the country, and a political crisis generated due to the results of the presidential elections. Conditions that generated a climate of uncertainty and volatility in the markets that ultimately impacted all economic sectors of the country.",
      images: ["/news/noticia_default.jpg"],
    },
    "news-9": {
      title: "Annual Report 2020",
      text: "The General Managing Director of Sigma Safi Craig, John Carleton – Smith, below gives us the letter from the Report for the 2020 period, in which he gives us a brief summary of the challenges and achievements that were achieved during this period with political uncertainty and legal due to cases of corruption and money laundering that have been negatively impacting the course of the country’s economy since 2017, injecting volatility and affecting investments in capital goods, real estate and private investments mainly in the construction and infrastructure sector. All this without leaving aside the focus on credit, macro and political risk management. Finally, he mentions the expectations and plans for the following year, leveraging in this way the knowledge, expertise and track record as well as taking advantage of the “cross-selling” that Sigma Safi has achieved over time.”",
      images: ["/news/noticia_default.jpg"],
    },
    "news-10": {
      title: "Safi – SMV Statement",
      text: "It is reported that due to the state of health emergency in which our country finds itself and in order to counteract the spread of the pandemic to which we are exposed, all documentation that is sent to our office located at Av. Santo Toribio 173, Of. 601, Torre Real 8 – San Isidro, must be delivered to the reception of the building.",
      images: ["/news/noticia_default.jpg"],
    },
    "news-11": {
      title: "2019 Report – Letter from the General Manager",
      text: "The General Managing Director of Sigma Safi Craig, John Carleton – Smith, below gives us the letter from the Report for the 2019 period, in which he gives us a brief summary of the challenges and achievements that were achieved during this period with political uncertainty and legal due to cases of corruption and money laundering that have been negatively impacting the direction of the country’s economy since 2017, injecting volatility and affecting investments in capital goods, real estate and private investments mainly in the construction and infrastructure sector. All this without leaving aside the focus on credit, macro and political risk management. Finally, he mentions the expectations and plans for the following year, thus leveraging the knowledge, expertise and track record as well as taking advantage of the cross-selling that Sigma Safi has achieved over time.",
      images: ["/news/noticia_default.jpg"],
    },
    "news-12": {
      title: "2019 The Legal 500",
      text: (
        <>
          In 2019, The Legal 500, an English firm that compiles rankings of the
          best lawyers in the world, included our legal team as one of the best
          in-house legal teams in the Peruvian market in its GC Powerlist Peru
          Teams 2019. Likewise, in 2018, the same firm considered our Vice
          President of Legal Affairs, Karen Ames, within the ranking of The
          Legal 500 GC Powerlist: General Counsel. This ranking recognizes the
          outstanding leaders of the legal areas of the Peruvian market.
        </>
      ),
      images: ["/news/certificate.jpg"],
    },
    "news-13": {
      title: "Sigma SAFI approved the Crime Prevention Model",
      text: "Sigma SAFI approved the Crime Prevention Model, in accordance with the guidelines of Law No. 30424.",
      images: ["/news/noticia_default.jpg"],
    },
    "news-14": {
      title: "We see more investment in capital goods than we expected",
      text: "We see more investment in capital goods than we expected",
      images: ["/news/entrevista-cs.png"],
    },
    "news-15": {
      title: "Safi – SMV Statement",
      text: "It is reported that due to the state of health emergency in which our country finds itself and in order to counteract the spread of the pandemic to which we are exposed, all documentation that is sent to our office located at Av. Santo Toribio 173, Of. 601, Torre Real 8 – San Isidro, must be delivered to the reception of the building.",
      images: ["/news/noticia_default.jpg"],
    },
    "news-16": {
      title: "Safi – SMV Statement",
      text: "It is reported that due to the state of health emergency in which our country finds itself and in order to counteract the spread of the pandemic to which we are exposed, all documentation that is sent to our office located at Av. Santo Toribio 173, Of. 601, Torre Real 8 – San Isidro, must be delivered to the reception of the building.",
      images: ["/news/noticia_default.jpg"],
    },
    "news-17": {
      title: "Safi – SMV Statement",
      text: "It is reported that due to the state of health emergency in which our country finds itself and in order to counteract the spread of the pandemic to which we are exposed, all documentation that is sent to our office located at Av. Santo Toribio 173, Of. 601, Torre Real 8 – San Isidro, must be delivered to the reception of the building.",
      images: ["/news/noticia_default.jpg"],
    },
    "news-18": {
      title: "Safi – SMV Statement",
      text: "It is reported that due to the state of health emergency in which our country finds itself and in order to counteract the spread of the pandemic to which we are exposed, all documentation that is sent to our office located at Av. Santo Toribio 173, Of. 601, Torre Real 8 – San Isidro, must be delivered to the reception of the building.",
      images: ["/news/noticia_default.jpg"],
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
