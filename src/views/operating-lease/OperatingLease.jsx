import React from "react";
import NavBar from "../../components/navbar/NavBar";
import CategoryWithBackgroundVideo from "../../components/category/CategoryWithBackgroundVideo";
import { GiMoneyStack } from "react-icons/gi";
import styles from "./OperatingLease.module.css";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { GiPodiumWinner } from "react-icons/gi";
import CategoryBox from "../../components/category-box/CategoryBox";
import video_bg from "../../assets/oleoducto.mov"

const OperatingLease = () => {
  return (
    <>
      <NavBar></NavBar>
      <CategoryWithBackgroundVideo
        videoSrc={video_bg}
        title={"Operating Lease"}
        childComponent={
          <div className={styles.containerCategories}>
            <CategoryBox
              icon={<GiMoneyStack className={styles.icon}></GiMoneyStack>}
              title={"Managed Funds"}
              link="/managed-funds"
            />
            <CategoryBox
              icon={<HiOutlineDocumentSearch className={styles.icon} />}
              title={"Product Description"}
              link="/product-description"
            />
            <CategoryBox
              icon={<GiPodiumWinner className={styles.icon} />}
              title={"Advantages"}
              link="/advantages"
            />
          </div>
        }
      />
    </>
  );
};

export default OperatingLease;
