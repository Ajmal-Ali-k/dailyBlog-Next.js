import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
    {
      status === "authenticated" ?
      <div className={styles.write}>
      <textarea
        placeholder="write a comment..."
        className={styles.input}
        //   onChange={(e) => setDesc(e.target.value)}
      />
      <button className={styles.button} >
        Send
      </button>
    </div> :(
      <Link href="/login">Login to Write a comment</Link>
    )
    }
  

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>hgjhggig</span>
              <span className={styles.date}>2146</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sit quis consequuntur, dolore asperiores quos id doloremque, possimus qu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
