import React from 'react'
import styles from "./TimeLineItem.module.css"
const TimeLineItem = ({title,text,whiteLine,icon}) => {
  return (
    <div className={styles.dataInfo}>
        {icon}
        <div className={styles.containerData}>
          <p className={styles.title}>{title}</p>
          <p className={styles.miniInfo}>
           {text}
          </p>
        </div>
        {whiteLine}
      </div>
  )
}

export default TimeLineItem