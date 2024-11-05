import NavBar from "../../components/navbar/NavBar";
import CardProfile from "../../components/card-profile/CardProfile";
import styles from "./InvestmentCommitee.module.css";

const InvestmentCommitee = () => {
  return (
    <>
    
    <NavBar></NavBar>
      <div className={styles.fondo}>
        <div className={styles.container}>
          <h3 className="mt-5">Investment Commitee</h3>
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
              photo={"./manuel-salazar.jpg"}
              name={"Manuel Salazar"}
              position={"Managing Partner"}
            />
            <CardProfile
              photo={"./katherine-reyes.jpg"}
              name={"Katherine Reyes"}
              position={"CEO"}
            />
            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvestmentCommitee