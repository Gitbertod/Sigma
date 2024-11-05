import React from "react";
import styles from "./CardProfile.module.css";

const CardProfile = ({name,position,photo}) => {
  return (
    <div className={styles.card} data-aos="fade-up" data-aos-duration="2000">
      <img src={photo}></img>
      <p className={styles.parrafo}>
        <span>{name}</span>
        <br></br>
        {position}
      </p>
    </div>
  );
};

export default CardProfile;
