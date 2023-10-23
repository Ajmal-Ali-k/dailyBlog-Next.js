import Image from "next/image";
import styles from "./menuPosts.module.css"
import Link from "next/link";
import React from "react";

const MenuPosts = ({ withImage }) => {
  return (
    <div>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="food" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="food" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="food" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="food" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuPosts;
