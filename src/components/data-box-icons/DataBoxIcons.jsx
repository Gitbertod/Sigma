import { GiMoneyStack } from "react-icons/gi";
import styles from "./DataBoxIcons.module.css";
import MiniDataInfo from "../mini-data-info/MiniDataInfo";
import { GiPodiumWinner } from "react-icons/gi";

const DataBoxIcons = () => {
  return (
    <div className={styles.slidebottom}>
      <div className={styles.dataInfoContainer}>
        <MiniDataInfo
          title={"EXPERIENCE"}
          text={
            <>
              +19 Years of experience <br></br>in asset management
            </>
          }
          whiteLine={<div className={styles.whiteLine}></div>}
          icon={<img src="/experience.svg" className={styles.icon}></img>}
        />
        <MiniDataInfo
          icon={<GiMoneyStack className={styles.icon} />}
          title={"$1650MM"}
          text={<>Invested capital since<br></br> inception</>}
          whiteLine={<div className={styles.whiteLine}></div>}
        />
        <MiniDataInfo
          icon={<GiPodiumWinner className={styles.icon} />}
          title={"#1"}
          text={
            <>
              Operating Lease Investment <br></br>
              Fund Manager in the market
            </>
          }
        />
      </div>
    </div>
  );
};

export default DataBoxIcons;
