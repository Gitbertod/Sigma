import React from "react";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../assets/construccion.mov";
import NavBar from "../../components/navbar/NavBar";
import CardProfile from "../../components/card-profile/CardProfile";
import LeasOp from "../../components/leas-op/LeasOp";
import styles from "./ManagedFunds.module.css";

const ManagedFunds = () => {
  return (
    <>
      <NavBar></NavBar>
      <CategoryWithBackgroundVideo
        title="Managed Funds"
        videoSrc={video_bg}
        text={
          <>
            Sigma currently manages 4 investment funds, having had capital
            commitments of over US$800 million in the last 8 years for Operating
            Lease and Private Equity funds.<br></br>
          </>
        }
        childComponent={
          <div className={styles.container}>
            <LeasOp
              title={"LeasOp I"}
              itemList={
                <>
                  <li>
                    Operating Lease fund with $250 million in operations
                    spanning diverse sectors like construction, mining,
                    infrastructure, manufacturing, logistics, transportation,
                    and fishing.
                  </li>
                  <li>
                    Commenced operations in 2006, achieving tenfold growth from
                    the initial commitment.
                  </li>
                  <li>
                    Listed on the Lima Stock Exchange, with Peruvian pension
                    funds (AFP's) as key investors.
                  </li>
                  <li>
                    APOYO, backed by Fitch ratings, bestowed LeasOp I with an A
                    rating.
                  </li>
                </>
              }
            />
            <LeasOp
              title={"LeasOp II"}
              itemList={
                <>
                  <li>Operating Lease Fund launched in 2009.</li>
                  <li>
                    Initial authorized capital of $100 million, exclusively
                    dedicated to the corporate sector.
                  </li>
                  <li>
                    In 2017 Sigma upholds its commitment to investor
                    satisfaction with the triumphant repayment of the fund.
                  </li>
                </>
              }
            />
            <LeasOp
              title={"LeasOp III"}
              itemList={
                <>
                  <li>July 2008 launch: Operating Lease Fund.</li>
                  <li>
                    Initial commitment of $100 million; this fund has been
                    successfully repaid.
                  </li>
                  <li>
                    In 2013 continuing its trend of financial success, Sigma
                    achieves a milestone with the successful repayment of the
                    LeasOp III fund.
                  </li>
                </>
              }
            />
            <LeasOp
              title={"LeasOp V"}
              itemList={
                <>
                  <li>July 2019 launch: Operating Lease Fund.</li>
                  <li>
                    Total authorized capital of $200 million; estimated
                    repayment completion by 2025, maintaining a PCR rating of
                    AAf since inception.
                  </li>
                </>
              }
            />
            <LeasOp
              title={"LeasOp VI"}
              itemList={
                <>
                  <li>July 2008 launch: Operating Lease Fund.</li>
                  <li>
                    Initial commitment of $100 million; this fund has been
                    successfully repaid.
                  </li>
                  <li>
                    In 2013 continuing its trend of financial success, Sigma
                    achieves a milestone with the successful repayment of the
                    LeasOp III fund.
                  </li>
                </>
              }
            />
          </div>
        }
      />
    </>
  );
};

export default ManagedFunds;
