import React from "react";
import styles from "./Staff.module.css";
import NavBar from "../../components/navbar/NavBar";
import CardProfile from "../../components/card-profile/CardProfile";

const Staff = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.fondo}>
        <div className={styles.container}>
          <h3 className="mt-5">Staff</h3>
          <div className={styles.containerInfo}>
            <CardProfile
              photo={"./katherine-reyes.jpg"}
              name={"Katherine Reyes"}
              position={"CEO"}
            />
            <CardProfile
              photo={"./karen-ames.jpg"}
              name={"Karen Ames"}
              position={"VP - Legal Affairs"}
            />
            <CardProfile
              photo={"./guillermo-teramura.jpg"}
              name={"Guillermo Teramura"}
              position={" VP - Assets and Insurance"}
            />
            <CardProfile
              photo={"./arturo-palomares.jpg"}
              name={"Arturo Palomares"}
              position={" VP - Finance, Accounting and HR"}
            />
            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staff;
