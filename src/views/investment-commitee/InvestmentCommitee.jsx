import NavBar from "../../components/navbar/NavBar";
import CardProfile from "../../components/card-profile/CardProfile";
import styles from "./InvestmentCommitee.module.css";
import AOS from "aos";
import { useEffect } from "react";

const InvestmentCommittee = () => {
  
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    
    <NavBar></NavBar>
      <div className={styles.fondo}>
        <div className={styles.container}>
          <h3 className="mt-5">Investment Committee</h3>
          <div className={styles.containerInfo}>
            <CardProfile
              photo={"./craig-smith.jpg"}
              name={"Craig Carleton-Smith"}
              position={"Executive Chairman - CIO"}
              link={"/investment-committee/craig-carleton"}
              linkedin={"https://www.linkedin.com/in/craig-carleton-smith-56a3236/"}
            />
            <CardProfile
              photo={"./luis-felipe-mauger.jpg"}
              name={"Luiz Felipe Mauger"}
              position={"Director"}
              link={"/investment-committee/luiz-felipe-mauger"}
              linkedin={"https://www.linkedin.com/in/lfm-luizfelipemauger/"}
            />
            <CardProfile
              photo={"./manuel-salazar.jpg"}
              name={"Manuel Salazar"}
              position={"Managing Partner"}
              link={"/investment-committee/manuel-salazar"}
              linkedin={"https://www.linkedin.com/in/manuel-salazar-maurer/"}
            />
            <CardProfile
              photo={"./katherine-reyes.jpg"}
              name={"Katherine Reyes"}
              position={"CEO"}
              link={"/investment-committee/katherine-reyes"}
              linkedin={"https://www.linkedin.com/in/katherine-reyes-warthon-a480612/"}
            />
            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvestmentCommittee