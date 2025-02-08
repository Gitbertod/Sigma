"use client";

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import styles from "./CardComponent.module.css"


export function CardComponent({ photo, title, text, link }) {
  return (
    <a href={link}>
      <div className={styles.card}>
        <img src={photo} ></img>
        <h5 className={styles.title} >{title}</h5>
        <p className={styles.date}>{text}</p>

      </div>
      {/* <Card
        className="max-w-sm max-h-10-sm mt-5 mb-5 min-h-80"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={photo}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
      </Card> */}
    </a>
  );
}
