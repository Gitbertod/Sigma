import bgvideo2 from "../../assets/homeVideo.mov";
import styles from "./VideoHome.module.css";


const VideoHome = () => {
  return (
    <div className={styles.main}>
        <div className={styles.overlay}></div>
        <video src={bgvideo2} autoPlay loop muted className={styles.video}></video>
    </div>
  )
}

export default VideoHome