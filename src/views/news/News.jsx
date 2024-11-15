import React from "react";
import NavBar from "../../components/navbar/NavBar";
import { Card } from "flowbite-react";
import { CardComponent } from "../../components/card/CardComponent";
import styles from "./News.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.mainContainer}>
        <h2 className={styles.h2}>News</h2>
        <div className={styles.cards}>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={
                "Insightful Discussions on Legal Frameworks, Pandemic Impact, and Leasing Market Trends"
              }
              photo={"./news/xv_latam_leasing.jpg"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <a href="https://www.desdeadentro.pe/2024/04/luz-del-sur-recibe-formalmente-parques-eolicos-tres-hermanas-y-marcona/">
              <CardComponent
                title={
                  "Luz del Sur formally receives Tres Hermanas and Marcona"
                }
                photo={"./news/Mario_Firmando_v2.jpg"}
              />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Cavali Negotiable Invoices and Factoring 2024"}
              photo={"./news/news1.jpeg"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <a href="https://gestion.pe/economia/empresas/luz-del-sur-invertira-us-90-millones-en-peru-para-nuevos-proyectos-de-energia-renovable-noticia/">
              <CardComponent
                title={
                  "Indecopi authorized Luz del Sur to acquire the ‘Tres Hermanas’ and ‘Marcona’ wind farms"
                }
                photo={"./noticia.png"}
              />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Sigma Finance and GRAM unveil U.S. Partnership"}
              photo={"./news/sigmafinance.jpg"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={
                "Karen Ames recognized in GC Powerlist 2023 by The Legal 500"
              }
              photo={"./news/the_legal_500.png"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Annual Report 2022"}
              photo={"./news/noticia_default.jpg"}
              text={"March 27, 2023 "}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Annual Report 2021"}
              photo={"./news/noticia_default.jpg"}
              text={"March 28, 2022"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Annual Report 2020"}
              photo={"./news/noticia_default.jpg"}
              text={"March 29, 2021"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Safi – SMV Statement"}
              photo={"./news/noticia_default.jpg"}
              text={"08 September 2020 "}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"2019 Report – Letter from the General Manager"}
              photo={"./news/noticia_default.jpg"}
              text={"04 May 2020"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={
                "Statement of the Advisory Council of the Capital Market of Peru"
              }
              photo={"./news/noticia_default.jpg"}
              text={"April 2, 2020 "}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"2019 The Legal 500"}
              photo={"./news/certificate.jpg"}
              text={"02 March 2020"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={
                "Sigma SAFI approved the Crime Prevention Model, in accordance with the guidelines of Law No. 30424."
              }
              photo={"./news/noticia_default.jpg"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"We see more investment in capital goods than we expected"}
              photo={"./news/entrevista-cs.png"}
              text={"Wednesday, January 13, 2016"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Launch of new LR 11000 high capacity crane in Peru"}
              photo={"./news/noticia_20032015.png"}
              text={"Friday, March 20, 2015"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"We evaluate investment funds for high-income people"}
              photo={"./news/entrevista-cs-10032015.jpg"}
              text={"Tuesday, March 10, 2015 "}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Main indicators of Investment Funds"}
              photo={"./news/noticia_20082014.jpg"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Investment funds manage assets for S/. 2,000 mls."}
              photo={"./news/noticia_28052014.jpg"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
