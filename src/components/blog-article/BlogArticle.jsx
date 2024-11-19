import React from "react";
import styles from "./BlogArticle.module.css";

const BlogArticle = ({ title, text, images }) => {
  return (
    <>
      <h1 className={styles.blogTitle}>{title}</h1>
      <div className={styles.blogArticle}>
        <div className={styles.blogImages}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Blog Image ${index + 1}`}
              className={styles.blogImage}
            />
          ))}
        </div>
        <div className={styles.blogText}>{text}</div>
      </div>
    </>
  );
};

export default BlogArticle;
