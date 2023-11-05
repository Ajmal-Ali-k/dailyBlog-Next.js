import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch ");
  }
  return res.json();
};
const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Catagories</h1>
      <div className={styles.categories}>
        {data?.map((data) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[data.slug]}`}
            key={data._id}
          >
            <Image
              src={data.img}
              alt="icon"
              width={32}
              height={32}
              className={styles.image}
            />
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
