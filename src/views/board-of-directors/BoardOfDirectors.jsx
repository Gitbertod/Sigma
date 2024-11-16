import CardProfile from "../../components/card-profile/CardProfile";
import NavBar from "../../components/navbar/NavBar";
import styles from "./BoardOfDirectors.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const BoardOfDirectors = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.fondo}>
        <div className={styles.container}>
          <h3 className="mt-5">{t("BoardOfDirectors.BoardOfDirectorsTitle")}</h3>
          <div className={styles.containerInfo}>
            <CardProfile
              photo={"./craig-smith.jpg"}
              name={t("BoardOfDirectors.CraigName")}
              position={t("BoardOfDirectors.CraigPosition")}
              link={"/board-of-directors/craig-carleton"}
              linkedin={"https://www.linkedin.com/in/craig-carleton-smith-56a3236/"}
            />
            <CardProfile
              photo={"./luis-felipe-mauger.jpg"}
              name={t("BoardOfDirectors.LuizName")}
              position={t("BoardOfDirectors.LuizPosition")}
              link={"/board-of-directors/luiz-felipe-mauger"}
              linkedin={"https://www.linkedin.com/in/lfm-luizfelipemauger/"}
            />
            <CardProfile
              photo={"./ana-maria-bitar.jpg"}
              name={t("BoardOfDirectors.AnaName")}
              position={t("BoardOfDirectors.AnaPosition")}
              link={"/board-of-directors/ana-maria-bitar"}
              linkedin={"https://www.linkedin.com/in/ana-maria-bitar-1a2aba1/"}
            />
            <CardProfile
              photo={"./gonzalo-de-las-casas.jpg"}
              name={t("BoardOfDirectors.GonzaloName")}
              position={t("BoardOfDirectors.GonzaloPosition")}
              link={"/board-of-directors/gonzalo-de-las-casas"}
              linkedin={"#"}
            />
            <CardProfile
              photo={"./irzio-pinasco.jpg"}
              name={t("BoardOfDirectors.IrzioName")}
              position={t("BoardOfDirectors.IrzioPosition")}
              link={"/board-of-directors/irzio-pinasco"}
              linkedin={"https://www.linkedin.com/in/irzio-pinasco/"}
            />
            <CardProfile
              photo={"./martin-perez.jpg"}
              name={t("BoardOfDirectors.MartinName")}
              position={t("BoardOfDirectors.MartinPosition")}
              link={"/board-of-directors/martin-perez"}
              linkedin={"#"}
            />
            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardOfDirectors;

