import styles from "./InstitutionalPillars.module.css";
import { IoPeopleSharp } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { FaSearchengin } from "react-icons/fa6";
import NavBar from "../../components/navbar/NavBar";

import AOS from "aos";
import { useEffect } from "react";


const InstitutionalPillars = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.fondo}>
        <div className={styles.container}>
          <h3 className="mt-5">Institutional Pillars</h3>
          <div className={styles.containerInfo}>
            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
             <IoPeopleSharp className={styles.icon}/> 
             
              <p className={styles.parrafo}>
                <span>Team / Board of Directors: </span> Top notch professionals
                with deep understanding in Operating Lease, close relationship
                with suppliers, as well as an extensive potential customer
                network. Sigma's board of directors members have an extensive
                experience in banking and capital markets
              </p>
            </div>

            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <GrTechnology className={styles.icon}/>
              <p className={styles.parrafo}>
                <span>Technology and Process:</span> Own in-house software that
                supports every core workflow process, from structuring,
                approvals, and administration of our contracts, as well as
                collection processes and accounting procedures. Access to
                various sources of information for client evaluation and
                pre-screening: World-check, Sentinel (Central credit register).
              </p>
            </div>
            <div
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <FaSearchengin className={styles.icon}></FaSearchengin>
              <p className={styles.parrafo}>
                <span>Risk Management: </span> Main focus: client, assets and
                place of operation. Strong emphasis with the Know Your Costumer
                methodology (KYC). Experience with tailor made structures
                including additional guarantees /collaterals. For example:
                Cross-defaults, warranties, trust guarantees, cash collaterals,
                among others.
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
