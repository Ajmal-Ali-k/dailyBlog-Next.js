import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="pic" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>culture</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          consectetur libero aliquam. Rerum neque tempore quae, quisquam debitis
          earum rem vero suscipit excepturi laboriosam reiciendis assumenda
          facere minima ducimus sit.
        </p>
        <Link className={styles.link} href="/">Read more</Link>
      </div>
    </div>
  );
};

export default Card;
