import styles from "./InstitutionalPillars.module.css";
import { IoPeopleSharp } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { FaSearchengin } from "react-icons/fa6";
import NavBar from "../../components/navbar/NavBar";

import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const InstitutionalPillars = () => {
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
          <h3 className="mt-5">{t("InstitutionalPillars.InstitutionalPillarsTitle")}</h3>
          <div className={styles.containerInfo}>
            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <IoPeopleSharp className={styles.icon} />
              <p className={styles.parrafo}>
                <span>{t("InstitutionalPillars.InstitutionalPillarsTeamTitle")}: </span>
                {t("InstitutionalPillars.InstitutionalPillarsTeamDescription")}
              </p>
            </div>

            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <GrTechnology className={styles.icon} />
              <p className={styles.parrafo}>
                <span>{t("InstitutionalPillars.InstitutionalPillarsTechnologyTitle")}: </span>
                {t("InstitutionalPillars.InstitutionalPillarsTechnologyDescription")}
              </p>
            </div>
            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <FaSearchengin className={styles.icon} />
              <p className={styles.parrafo}>
                <span>{t("InstitutionalPillars.InstitutionalPillarsRiskTitle")}: </span>
                {t("InstitutionalPillars.InstitutionalPillarsRiskDescription")}
              </p>
            </div>

            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstitutionalPillars;
