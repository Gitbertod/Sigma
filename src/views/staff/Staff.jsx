import styles from "./Staff.module.css";
import NavBar from "../../components/navbar/NavBar";
import CardProfile from "../../components/card-profile/CardProfile";
import AOS from "aos";
import { useEffect } from "react";


const Staff = () => {
  
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className={styles.fondo}>
        <div className={styles.container}>
          <h3 className="mt-5">Staff</h3>
          <div className={styles.containerInfo}>
            <CardProfile
              photo={"/katherine-reyes.jpg"}
              name={"Katherine Reyes"}
              position={"CEO"}
              link={"/staff/katherine-Reyes"}
              linkedin={"https://www.linkedin.com/in/katherine-reyes-warthon-a480612/"}
            />
            <CardProfile
              photo={"/karen-ames.jpg"}
              name={"Karen Ames"}
              position={"VP - Legal Affairs"}
              link={"/staff/karen-ames"}
              linkedin={"https://www.linkedin.com/in/karen-ames-26008824/"}
            />
            <CardProfile
              photo={"/guillermo-teramura.jpg"}
              name={"Guillermo Teramura"}
              position={" VP - Assets and Insurance"}
              link={"/staff/guillermo-teramura"}
              linkedin={"https://www.linkedin.com/in/gteramura/"}
            />
            <CardProfile
              photo={"/arturo-palomares.jpg"}
              name={"Arturo Palomares"}
              position={" VP - Finance, Accounting and HR"}
              link={"/staff/arturo-palomares"}
              linkedin={"https://www.linkedin.com/in/arturo-palomares-588a5214/"}
            />
            <div className={styles.imagen}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staff;
