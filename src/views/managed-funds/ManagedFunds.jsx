import React from "react";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../assets/construccion.mov";
import NavBar from "../../components/navbar/NavBar";
import CardProfile from "../../components/card-profile/CardProfile";

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
            <br></br>
            <ul>
              <strong><h3>LeasOp I</h3> </strong>
              <li>
                Operating Lease fund with $250 million in operations spanning
                diverse sectors like construction, mining, infrastructure,
                manufacturing, logistics, transportation, and fishing.
              </li><br></br>
              Commenced operations in 2006, achieving tenfold growth from the
              initial commitment. <br></br>
              <br></br>
              Listed on the Lima Stock Exchange, with Peruvian pension funds
              (AFP's) as key investors. <br></br>
              <br></br>
              APOYO, backed by Fitch ratings, bestowed LeasOp I with an A
              rating.
            </ul>
          </>
        }
      />
    </>
  );
};

export default ManagedFunds;
