import React from "react";
import styles from "./Staff.module.css";
import NavBar from "../../components/navbar/NavBar";

const Staff = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.fondo}>
        <div className={styles.container}>
          <h3 className="mt-5">Staff</h3>
          <div className={styles.containerInfo}>
            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p className={styles.parrafo}>
                <span>Katherine Reyes</span>
                <br></br> CEO
              </p>
            </div>

            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p className={styles.parrafo}>
                <span>Karen Ames</span>
                <br></br>
                VP - Legal Affairs
              </p>
            </div>
            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p className={styles.parrafo}>
                <span>Guillermo Teramura </span>
                <br></br>
                VP - Assets and Insurance
              </p>
            </div>

            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p className={styles.parrafo}>
                <span>Arturo Palomares</span>
                <br></br> VP - Finance, Accounting and HR
              </p>
            </div>

            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staff;
