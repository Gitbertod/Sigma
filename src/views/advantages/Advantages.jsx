import React from "react";
import NavBar from "../../components/navbar/NavBar";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import video_bg from "../../assets/construccion.mov";
import styles from "./Advantages.module.css";

const Advantages = () => {
  return (
    <>
      <NavBar />
      <CategoryWithBackgroundVideo
        title="Advantages: Operating Lease "
        videoSrc={video_bg}
        text={
          <>
            <ul className={styles.lista}>
              <li>
                <strong>OPEX Efficiency: </strong> The monthly fee is classified
                as a current operating expense, allowing for optimal budget
                management at 100%.
              </li>
              <br></br>
              <li>
                <strong>Put Option (Optional): </strong>
                Sigma provides the option to sell assets to the customer at
                approximately market value at the lease's conclusion, offering
                flexibility and potential cost-effectiveness.
              </li>
              <br></br>
              <li>
                <strong>Specialized Maintenance:</strong> Direct (dealer) and
                web indirect (dealer certified) maintenance services are
                provided.
              </li>
              <br></br>
              <li>
                <strong>Periodic Machinery Renewal:</strong> The lessee has the
                opportunity to renew its machinery periodically, ensuring access
                to up-to-date and efficient equipment.
              </li>
              <br></br>
              <li>
                <strong>Outsourced Equipment Maintenance: </strong> Maintenance
                is streamlined through a repair and maintenance contract with
                the dealer, relieving the lessee of the responsibility and
                ensuring specialized care for the leased assets.
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default Advantages;
