import React from 'react'
import styles from "./menuCatagories.module.css"
import Link from 'next/link'

const MenuCatagories = () => {
  return (
    <div className={styles.categoryList}>
    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.style}`}
    >
      Style
    </Link>
    <Link
      href="/blog?cat=fashion"
      className={`${styles.categoryItem} ${styles.fashion}`}
    >
      fashion
    </Link>

    <Link
      href="/blog?cat=food"
      className={`${styles.categoryItem} ${styles.food}`}
    >
      food
    </Link>
    <Link
      href="/blog?cat=culture"
      className={`${styles.categoryItem} ${styles.culture}`}
    >
      culture
    </Link>
  </div>
  )
}

export default MenuCatagories