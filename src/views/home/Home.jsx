import NavBar from "../../components/navbar/NavBar";
import SectionComponent from "../../components/section-component/SectionComponent";
import VideoHome from "../../components/video-home/VideoHome";
import { useEffect } from "react";
import styles from "./Home.module.css";
import AOS from "aos";
import { Button } from "flowbite-react";
import { FooterComponent } from "../../components/footer/FooterComponent";
import News from "../../components/news/News";
import DataBoxIcons from "../../components/data-box-icons/DataBoxIcons";

import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/languageSelector/LanguageSelector";

const Home = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <VideoHome></VideoHome>
        <main className="flex-grow justify-center items-center">
          <div className={styles.centerContainer}>
            <div className={styles.container}></div>
          </div>
          <div className={styles.img}>
            <div>
              <img
                src="/SigmaSimbol.svg"
                alt="Sigma Symbol"
                className={styles.img}
              />
            </div>
            <h1 className={styles.h1}>SIGMA</h1>
          </div>
          <p className={styles.subtitle}></p>
        </main>
        <SectionComponent
          title={t("Who we are")}
          text={t("description")}
          imgSrc="./people2.png"
          childComponent3={<DataBoxIcons></DataBoxIcons>}
        />
        <div className="bg-white justify-items-center">
          <DataBoxIcons className="m-5"></DataBoxIcons>
        </div>
        <News />
      </div>
    </>
  );
};

export default Home;
