import React from "react";
import NavBar from "../../components/navbar/NavBar";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import styles from "./InfrastructurePrivateEquityMF.module.css";
import video_bg from "../../assets/eolico.mov";

const InfrastructurePrivateEquityMF = () => {
  return (
    <>
      <NavBar />
      <CategoryWithBackgroundVideo
        videoSrc={video_bg}
        title={"Managed Funds"}
        text={
          <>
            <h2 className={styles.subtitle}>
              Infrastructure Private Equity Fund
            </h2>
            <ul>
              <li className={styles.lista}>
                Launched in 2012, the $500 million private equity fund secured
                $250 million in committed capital after two successful
                fundraising rounds.
              </li>
              <li className={styles.lista}>
                Investors include the three main Peruvian Pension Funds and two
                other renowned institutional investors.
              </li>
              <li className={styles.lista}>
                Dedicated to investing in greenfield infrastructure projects
                encompassing power generation, transmission, transportation,
                ports, etc. Sigma collaborates with key global sponsors to
                develop impactful projects in Peru.
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default InfrastructurePrivateEquityMF;
