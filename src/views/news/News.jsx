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
              photo={"./public/xv_latam_leasing.jpg"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Luz del Sur formally receives Tres Hermanas and Marcona"}
              photo={"./public/mario_firmando_v2.jpg"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Cavali Negotiable Invoices and Factoring 2024"}
              photo={"./public/news1.jpeg"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={
                "Indecopi authorized Luz del Sur to acquire the ‘Tres Hermanas’ and ‘Marcona’ wind farms"
              }
              photo={"./noticia.png"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Sigma Finance and GRAM unveil U.S. Partnership"}
              photo={"./noticia.png"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={
                "Karen Ames recognized in GC Powerlist 2023 by The Legal 500"
              }
              photo={"./noticia.png"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Annual Report 2022"}
              photo={"./noticia.png"}
              text={"March 27, 2023 "}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Annual Report 2021"}
              photo={"./noticia.png"}
              text={"March 28, 2022"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Annual Report 2020"}
              photo={"./noticia.png"}
              text={"March 29, 2021"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Safi – SMV Statement"}
              photo={"./noticia.png"}
              text={"08 September 2020 "}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"2019 Report – Letter from the General Manager"}
              photo={"./noticia.png"}
              text={"04 May 2020"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={
                "Statement of the Advisory Council of the Capital Market of Peru"
              }
              photo={"./noticia.png"}
              text={"April 2, 2020 "}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"2019 The Legal 500"}
              photo={"./noticia.png"}
              text={"02 March 2020"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={
                "Sigma SAFI approved the Crime Prevention Model, in accordance with the guidelines of Law No. 30424."
              }
              photo={"./noticia.png"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"We see more investment in capital goods than we expected"}
              photo={"./noticia.png"}
              text={"Wednesday, January 13, 2016"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Launch of new LR 11000 high capacity crane in Peru"}
              photo={"./noticia.png"}
              text={"Friday, March 20, 2015"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"We evaluate investment funds for high-income people"}
              photo={"./noticia.png"}
              text={"Tuesday, March 10, 2015 "}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Main indicators of Investment Funds"}
              photo={"./noticia.png"}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CardComponent
              title={"Investment funds manage assets for S/. 2,000 mls."}
              photo={"./noticia.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
