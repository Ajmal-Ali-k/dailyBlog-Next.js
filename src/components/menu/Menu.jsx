import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCatagories from "../menuCatagories/MenuCatagories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Discover By Topic</h2>
      <h1 className={styles.title}>Catagories</h1>
      <MenuCatagories/>
      <h2 className={styles.subtitle}>Choose by Editor</h2>
      <h1 className={styles.title}>Editor pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
