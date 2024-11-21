import PropTypes from "prop-types";
import styles from "./CategoryWithBackgroundVideo.module.css";

const CategoryWithBackgroundVideo = ({
  title,
  text,
  videoSrc,
  childComponent,
}) => {
  return (
    <div className={styles.mainContainer}>
      {/* Video y overlay */}
      <div className={styles.videoContainer}>
        <video
          src={videoSrc}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBg}
        ></video>
        <div className={styles.overlay}></div>
      </div>

      {/* Contenido */}
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.yellowLine}></div>
        <p className={styles.textInfo}>{text}</p>
        {childComponent}
      </div>
    </div>
  );
};

CategoryWithBackgroundVideo.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  childComponent: PropTypes.node,
};

export default CategoryWithBackgroundVideo;
