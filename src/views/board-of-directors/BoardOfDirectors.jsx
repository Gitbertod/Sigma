import React from "react";
import CardProfile from "../../components/card-profile/CardProfile";
import NavBar from "../../components/navbar/NavBar";
import styles from "./BoardOfDirectors.module.css";

const BoardOfDirectors = () => {
  return (
    <>
      <NavBar />
      <div className={styles.fondo}>
        <div className={styles.container}>
          <h3 className="mt-5">Board of Directors</h3>
          <div className={styles.containerInfo}>
            <CardProfile
              photo={"./craig-smith.jpg"}
              name={"Craig Carleton-Smith"}
              position={"Executive Chairman - CIO"}
            />
            <CardProfile
              photo={"./luis-felipe-mauger.jpg"}
              name={"Luiz Felipe Mauger"}
              position={"Director"}
            />
            <CardProfile
              photo={"./irzio-pinasco.jpg"}
              name={"Irzio Pinasco"}
              position={"Director"}
            />
            <CardProfile
              photo={"./gonzalo-de-las-casas.jpg"}
              name={"Gonzalo De Las Casas"}
              position={"Director"}
            />
            <CardProfile
              photo={"./martin-perez.jpg"}
              name={"Martín Pérez"}
              position={"Alternate Director"}
            />
            <CardProfile
              photo={"./ana-maria-bitar.jpg"}
              name={"Ana María Bitar"}
              position={"Independent Director"}
            />
            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardOfDirectors;
