import { TimeLine } from "../../components/time-line/TimeLine";
import styles from "./History.module.css";
import NavBar from "../../components/navbar/NavBar";


const History = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.title}>HISTORY</div>
        <div className={styles.content}>
          <img src="./sigmaCircle.svg" className={styles.symbol}></img>
          <TimeLine></TimeLine>
        </div>
      </div>
      
    </>
  );
};

export default History;
