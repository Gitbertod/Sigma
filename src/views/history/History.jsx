import React from "react";
import { TimeLine } from "../../components/time-line/TimeLine";
import styles from "./History.module.css";
import NavBar from "../../components/navbar/NavBar";
import { FaCalendarAlt } from "react-icons/fa";

const History = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.title}>HISTORY</div>
        <div className={styles.content}>
          <img src="/sigmaCircle.svg" className={styles.symbol}></img>
          <div className={styles.containerTitle}>
            <h2 className={styles.h2}></h2>
          </div>
          <div className={styles.timeLineContainer}>
            <TimeLine></TimeLine>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
