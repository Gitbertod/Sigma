import React, { useRef, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./Navidad.module.css";

const Navidad = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Primero silencia para permitir autoplay
      video.muted = true;
      
      video.play()
        .then(() => {
          // Una vez que el video está reproduciéndose, desactiva mute
          video.muted = false;
          // Vuelve a llamar play para asegurar que continúa
          video.play().catch(err => {
            console.warn("Error al reproducir sin mute:", err);
          });
        })
        .catch((err) => {
          console.warn("Error al reproducir video:", err);
        });
    }
  }, []);

  return (
    <div className={styles.page}>
      {/* <NavBar /> */}

      <main className={styles.content}>

        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={styles.video}
            src="/videos/SigmaSafi.mp4"
            controls
            loop
            autoPlay
            allowFullScreen
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
