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
      title: "We evaluate investment funds for high-income people",
      text: (
        <>
          Minimum fee for the personal fund would be US$250,000. Sigma will
          “raise” its fourth operating leasing fund this year. In 2015, Sigma
          Sociedad Investment Fund Administrator celebrates a decade of creation
          and wants to consolidate what has been done so far to continue growing
          in the coming years. Although its focus will continue to be on
          institutional investors, it is also evaluating offering products for
          high-net-worth individuals.<br></br>
          <br></br>
          <strong>How will this year look for Sigma SAFI investments?</strong>
          <br></br>
          Since 2015 is a pre-election year we are all going to be a little more
          cautious than we normally are. Sigma’s private equity infrastructure
          fund (with $250 million committed) is progressing very well. But we
          see many delays in the execution of large infrastructure projects. The
          most important investors want to see what happens on the political
          side and at a global economic level; There is more uncertainty than in
          other years and they are cautious about entering into long-term
          projects at this time.<br></br>
          <br></br>
          <strong>
            Do you still see investment opportunities in the infrastructure
            sector?
          </strong>
          <br></br>
          There are several very interesting projects and we want to actively
          participate in the development of the country’s infrastructure. We are
          looking at three or four things and we are going to manage those
          investments very carefully this year.<br></br>
          <br></br>
          <strong>What sectors interest you?</strong> Our focus is
          infrastructure. We are interested, for example, in financing road
          construction, works, transportation and fishing.<br></br>
          <br></br>{" "}
          <strong>
            How have you done with your operating leasing investment fund?
          </strong>{" "}
          <br></br>Last year was pretty good. We invest about US$100 million a
          year. Since its creation, we have invested between US$500 million and
          US$600 million, and divested half of it, between US$250 million and
          US$300 million.<br></br>
          <br></br>
          <strong>What are the expectations with this leasing fund?</strong>
          <br></br>
          Operating leasing has become increasingly a strategic financing
          product for our clients, and has become more interesting for
          infrastructure as a financing vehicle. We want to raise a new leasing
          fund this year, it would be the fourth.<br></br>
          <br></br>
          <strong>What size will this new fund be?</strong>
          <br></br> The size is confidential. But the first operating leasing
          fund manages an asset of US$ 260 million and expires in 2020, it will
          be nine years old and has a good track record. It has been very
          stable, solid and with very good returns. Last year and the ancestor
          returned, net, 7% in dollars. <br></br>
          <br></br>
          <strong>What other plans is Sigma SAFI considering?</strong>
          <br></br> We are still looking at the institutional investor market to
          grow, but we want to enter with other products, perhaps targeting the
          market of high-income people so that they can invest in leasing or
          other types of investment funds. We believe that there is a very
          interesting space to enter that market. There are people with high net
          worth who are looking for investment alternatives, given that interest
          rates are very low.<br></br>
          <br></br>
          <strong>
            What type of fund are you considering for these people?
          </strong>
          <br></br>
          We have three viable alternatives that are in different stages of
          evaluation, but we must ensure that they do not distract us from
          serving institutional investors. It can even be a fund for individuals
          that later scales and becomes institutional.<br></br>
          <br></br>{" "}
          <strong>
            What would be the minimum fee for people who want to invest in these
            funds?
          </strong>
          <br></br> We want to look for people with liquidity, who can enter
          sophisticated products; We don’t want to compete with mutual funds. An
          investor in these funds should have at least US$250,000 or US$500,000.
          But I must say that our strong focus is always going to be on
          institutional investors.<br></br>
          <br></br>{" "}
          <strong>Is there any other sector you would like to enter?</strong>
          <br></br> We want to invest in education. There are opportunities to
          invest in growth capital of small companies in that sector. There is
          room for investment funds because there is a great need for financing.
          For example, for universities that want to leave Lima or improve their
          infrastructure. <br></br>
          <br></br>Source: Diario Gestión – March 10, 2015
        </>
      ),
      images: ["/news/entrevista-cs-10032015.jpg"],
    },
    "news-17": {
      title: "Main indicators of Investment Funds",
      text: "Wednesday, August 20, 2014",
      images: ["/news/noticia_20082014.jpg"],
    },
    "news-18": {
      title: "Investment funds manage assets for S/. 2,000 mls.",
      text: (
        <>
          Saturday, May 28, 2014<br></br>
          <br></br> Strong expansion of these funds is explained by the need of
          institutional investors to find profitable instruments, says an E&Y
          partner.<br></br>
          <br></br> Investment funds are growing at a gallop in the local
          market, driven by the greater surpluses generated by people and
          companies.<br></br>
          <br></br> At the end of last year, the assets managed by investment
          funds registered with the securities market superintendence (SMV)
          amounted to S/. 2,031 million, 41% higher than that observed in 2012.
          <br></br>
          <br></br>
          The number of operating funds also grew, from 15 to 22, in that same
          period.<br></br>
          <br></br> “There is more wealth in this country, from people who have
          much more money to invest than before. Not only companies, AFPs and
          other institutional investors such as insurance companies; There are
          also many people and family offices (family wealth managers),” said
          E&Y partner Marco Zaldívar.<br></br>
          <br></br> “There are two effects: on the one hand, families and
          institutional investors have more money to invest in search of
          returns, and on the other, there are investment funds, which have the
          capacity to generate products for agents with surpluses,” he added. .
          <br></br>
          <br></br>
          Long term<br></br>
          <br></br> The market is going through a phase of creating investment
          funds for factoring (providing liquidity to SMEs), construction of
          buildings that are then rented, and financial instruments, among
          others.<br></br>
          <br></br> “As the funds are relatively new, significant growth will
          continue to be seen over the next few years,” Zaldívar said.<br></br>
          <br></br> He emphasized that investors should keep in mind that these
          are long-term funds, generally five to 10 years, and withdrawing from
          them early involves heavy penalties.<br></br>
          <br></br> Source: Diario Gestión
        </>
      ),
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
