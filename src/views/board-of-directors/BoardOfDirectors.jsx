import CardProfile from "../../components/card-profile/CardProfile";
import NavBar from "../../components/navbar/NavBar";
import styles from "./BoardOfDirectors.module.css";
import AOS from "aos";
import { useEffect } from "react";

const BoardOfDirectors = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  
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
              link={"/board-of-directors/craig-carleton"}
            />
            <CardProfile
              photo={"./luis-felipe-mauger.jpg"}
              name={"Luiz Felipe Mauger"}
              position={"Director"}
              link={"/board-of-directors/luiz-felipe-mauger"}
            />
            <CardProfile
              photo={"./irzio-pinasco.jpg"}
              name={"Irzio Pinasco"}
              position={"Director"}
              link={"/board-of-directors/irzio-pinasco"}
            />
            <CardProfile
              photo={"./gonzalo-de-las-casas.jpg"}
              name={"Gonzalo De Las Casas"}
              position={"Director"}
              link={"/board-of-directors/gonzalo-de-las-casas"}
            />
            <CardProfile
              photo={"./martin-perez.jpg"}
              name={"Martín Pérez"}
              position={"Alternate Director"}
              link={"/board-of-directors/martin-perez"}
            />
            <CardProfile
              photo={"./ana-maria-bitar.jpg"}
              name={"Ana María Bitar"}
              position={"Independent Director"}
              link={"/board-of-directors/ana-maria-bitar"}
            />
            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardOfDirectors;
