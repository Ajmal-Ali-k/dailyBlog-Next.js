import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Catagories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image
            src="/style.png"
            alt="icon"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/culture.png"
            alt="icon"
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/coding.png"
            alt="icon"
            width={32}
            height={32}
            className={styles.image}
          />
          coding
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image
            src="/style.png"
            alt="icon"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/culture.png"
            alt="icon"
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/coding.png"
            alt="icon"
            width={32}
            height={32}
            className={styles.image}
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
