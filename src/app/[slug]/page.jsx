import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="kg" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jhon doe</span>
              <span className={styles.date}>1-1-23</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="hd" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              nemo cum libero temporibus, quae alias rerum sapiente commodi aut
              molestias id cupiditate expedita magni tenetur placeat officiis,
              explicabo inventore. Molestiae.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              nemo cum libero temporibus, quae alias rerum sapiente commodi aut
              molestias id cupiditate expedita magni tenetur placeat officiis,
              explicabo inventore. Molestiae.
            </p>
            <h2> hjidjojgdasojdgj</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              nemo cum libero temporibus, quae alias rerum sapiente commodi aut
              molestias id cupiditate expedita magni tenetur placeat officiis,
              explicabo inventore. Molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              nemo cum libero temporibus, quae alias rerum sapiente commodi aut
              molestias id cupiditate expedita magni tenetur placeat officiis,
              explicabo inventore. Molestiae.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>


          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
