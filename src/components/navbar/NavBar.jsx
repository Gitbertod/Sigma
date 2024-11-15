import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHistory,FaUniversity,FaFileContract,FaChartLine } from "react-icons/fa";
import { FaPeopleGroup,FaPeopleArrows,FaPeopleLine } from "react-icons/fa6";
import { DrawerComponent } from "../drawer/DrawerComponent";



const NavBar = () => {
  const [isOpenBusisnes, setisOpenBusisnes] = useState(false);
  const [isOpenSectores, setIsOpenSectores] = useState(false);

  const handleAboutUsHover = () => {
    setisOpenBusisnes(true);
  };
  const handleSectoresHover = () => {
    setIsOpenSectores(true);
  };
  const handleMouseLeave = () => {
    setisOpenBusisnes(false);
    setIsOpenSectores(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <img
            src="/SigmaLogo.svg"
            className={styles.logoSigma}
            alt="Sigma Logotipo"
          />
        </Link>
        <div className={styles.subnav}></div>
        <div className={styles.optionsNav}>
        <div className={styles.subnav}>
            <button
              className={styles.subnavbtn}
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="#"> About Us</Link>
            </button>
            <div
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenBusisnes ? styles.slidebottom : ""
              }`}
            >
              <Link to="/who-we-are">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <IoPeopleSharp className={styles.icon} />
                    Who we are
                  </div>
                </div>
              </Link>

              <Link to="/history">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaHistory className={styles.icon}/>
                    History
                  </div>
                </div>
              </Link>
              <Link to="/institutional-pillars">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaUniversity className={styles.icon}/>
                    Institutional Pillars
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.subnav}>
            <button
              className={styles.subnavbtn}
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="#"> Busisness</Link>
            </button>
            <div
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenBusisnes ? styles.slidebottom : ""
              }`}
            >
              <Link to="/operating-lease">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaFileContract className={styles.icon} />
                    Operating Lease

                    
                  </div>
                  
                </div>
              </Link>

              <Link to="/infrastructure-private-equity/managed-funds">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaChartLine className={styles.icon} />
                    Infrastructure Private
                    Equity
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.subnav}>
            <button
              className={styles.subnavbtn}
              onMouseEnter={handleSectoresHover}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="#">Team</Link>
            </button>
            <div
              onMouseEnter={handleSectoresHover}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenSectores ? styles.slidebottom : ""
              }`}
            >
              <Link to="/staff">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaPeopleGroup className={styles.icon} />
                    Staff
                  </div>
                </div>
              </Link>
              <Link to="/investment-commitee">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaPeopleArrows className={styles.icon} />
                    Investment Commitee
                  </div>
                </div>
              </Link>
              <Link to="/board-of-directors">
                <div className={styles.slidebottom}>
                  <div className={styles.category}>
                    <FaPeopleLine className={styles.icon} />
                    Board of Directors
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>
              <Link to="/news">News</Link>
            </button>
          </div>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <DrawerComponent></DrawerComponent>
      </div>
    </>
  );
};

export default NavBar;
