import React from "react";
import NavBar from "../../components/navbar/NavBar";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import styles from "./ProductsDescriptions.module.css";
import video_bg from "../../assets/productDescription.mov";

const ProductsDescriptions = () => {
  return (
    <>
      <NavBar></NavBar>
      <CategoryWithBackgroundVideo
      videoSrc={video_bg}
        title={"Product description"}
        text={
          <>
            Operating Lease is a rental agreement facilitating the use of an
            asset for a predetermined term, mutually agreed upon by the lessor
            and the customer. Key features include:
            <ul className={styles.lista}>
              <li>
                <strong>Lease/Renewable Contract:</strong> It operates as a lease rather than a
                credit arrangement.
              </li><br></br>
              <li>
                <strong>Quota Based on Asset Productive Value (50% - 80%):</strong> The
                installment is determined by the productive value of the asset.
              </li><br></br>
              <li>
                <strong>Specialized Maintenance:</strong> Direct (dealer) and web indirect
                (dealer certified) maintenance services are provided.
              </li><br></br>
              <li>
                <strong>Support for Project Development and Growth Plans:</strong> An excellent
                alternative to bolster projects and growth initiatives.
              </li><br></br>
              <li>
                <strong>Customized Structures:</strong> Tailored solutions for the development of
                company-specific structures.
              </li><br></br>
              <li>
                <strong>Contractual Simplicity:</strong> Emphasizes simplicity in the contractual
                framework.
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default ProductsDescriptions;
