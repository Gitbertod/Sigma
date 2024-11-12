import React from "react";
import styles from "./LeasOp.module.css";

const LeasOp = ({title,itemList}) => {
  return (
    <>
      <div className={styles.leasContainer}>
        <h3>{title}</h3>
        <ul className={styles.lista}>
            {itemList}
        </ul>
      </div>
    </>
  );
};

export default LeasOp;
