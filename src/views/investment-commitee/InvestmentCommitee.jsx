import NavBar from "../../components/navbar/NavBar";
import CardProfile from "../../components/card-profile/CardProfile";
import styles from "./InvestmentCommitee.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const InvestmentCommittee = () => {
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
          <h3 className="mt-5">{t("InvestmentCommittee.InvestmentCommitteeTitle")}</h3>
          <div className={styles.containerInfo}>
            <CardProfile
              photo={"./craig-smith.jpg"}
              name={t("InvestmentCommittee.CraigName")}
              position={t("InvestmentCommittee.CraigPosition")}
              link={"/investment-committee/craig-carleton"}
              linkedin={"https://www.linkedin.com/in/craig-carleton-smith-56a3236/"}
            />
            <CardProfile
              photo={"./luis-felipe-mauger.jpg"}
              name={t("InvestmentCommittee.LuizName")}
              position={t("InvestmentCommittee.LuizPosition")}
              link={"/investment-committee/luiz-felipe-mauger"}
              linkedin={"https://www.linkedin.com/in/lfm-luizfelipemauger/"}
            />
            <CardProfile
              photo={"./manuel-salazar.jpg"}
              name={t("InvestmentCommittee.ManuelName")}
              position={t("InvestmentCommittee.ManuelPosition")}
              link={"/investment-committee/manuel-salazar"}
              linkedin={"https://www.linkedin.com/in/manuel-salazar-maurer/"}
            />
            <CardProfile
              photo={"./katherine-reyes.jpg"}
              name={t("InvestmentCommittee.KatherineName")}
              position={t("InvestmentCommittee.KatherinePosition")}
              link={"/investment-committee/katherine-reyes"}
              linkedin={"https://www.linkedin.com/in/katherine-reyes-warthon-a480612/"}
            />
            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentCommittee;
