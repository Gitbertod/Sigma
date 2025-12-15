import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./Navidad.module.css";

const Navidad = () => {
  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.content}>
        <h1 className={styles.title}>Mensaje Navideño</h1>

        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            src="/videos/SigmaSafi.mp4"
            controls
            loop
            muted
          >
            Tu navegador no soporta el video.
          </video>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Navidad;
