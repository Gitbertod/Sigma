import React from "react";
import styles from "./CardProfile.module.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardProfile = ({ name, position, photo, likedin,link }) => {
  return (
    <div className={styles.card} data-aos="fade-up" data-aos-duration="2000">
      <Link to={link}>
        <img src={photo}></img>
        <p className={styles.parrafo}>
          <span>{name}</span>
          <br></br>
          {position}
        </p>
      </Link>
      <Link to={"#"}>
        <FaLinkedinIn className={styles.icon} />
      </Link>
    </div>
  );
};

export default CardProfile;
