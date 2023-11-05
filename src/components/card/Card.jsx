import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, data }) => {
 
  return (
    <div className={styles.container} key={key}>
      {data.img && (
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="pic" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>
            {data.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{data.catSlug}</span>
        </div>
        <Link href={`/posts/${data.slug}`}>
          <h1>{data.title}</h1>
        </Link>
        {typeof data?.desc === "string" && (
            <div
              className={styles.desc}
              dangerouslySetInnerHTML={{ __html: data?.desc.substring(0,60) }}
            />
          )}
        {/* <p className={styles.desc}>{data.desc.substring(0, 60)}</p> */}
        <Link className={styles.link} href={`/posts/${data.slug}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
