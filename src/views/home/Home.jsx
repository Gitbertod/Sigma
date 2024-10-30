import NavBar from "../../components/navbar/NavBar";
import SectionComponent from "../../components/section-component/SectionComponent";
import VideoHome from "../../components/video-home/VideoHome";
import { useEffect } from "react";
import styles from "./Home.module.css";
import AOS from "aos";
import { Button } from "flowbite-react";
import { FooterComponent } from "../../components/footer/FooterComponent";

const Home = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
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
          title="Who we are"
          text={
            <>
              Sigma SAFI have been a cornerstone of Peru's financial landscape
              since 2005. With a robust invested capital of US$ 1,650 million,
              we specialize in investment funds, particularly excelling in
              asset-backed strategies, private credit, and private equity. Our
              expertise lies in meticulous risk management, ensuring a balance
              between risk and returns. At Sigma, we're committed to shaping a
              prosperous financial future through innovation and strategic
              vision
            </>
          }
          imgSrc="./people2.png"
        />
        <FooterComponent></FooterComponent>
      </div>
    </>
  );
};

export default Home;
