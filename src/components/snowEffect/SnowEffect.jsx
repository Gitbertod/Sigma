import { useEffect } from "react";
import styles from "./SnowEffect.module.css";

const SnowEffect = ({ flakes = 40 }) => {
  useEffect(() => {
    const container = document.getElementById("snow-container");
    if (!container) return;

    for (let i = 0; i < flakes; i++) {
      const flake = document.createElement("div");
      flake.className = styles.snowflake;

      // Variación individual
      flake.style.left = Math.random() * 100 + "vw";
      flake.style.animationDuration = 8 + Math.random() * 6 + "s";
      flake.style.animationDelay = Math.random() * 5 + "s";
      flake.style.opacity = Math.random() * 0.6 + 0.3;
      flake.style.transform = `scale(${Math.random() * 0.7 + 0.3})`;

      container.appendChild(flake);
    }

    return () => {
      container.innerHTML = "";
    };
  }, [flakes]);

  return <div id="snow-container" className={styles.snow} />;
};

export default SnowEffect;
