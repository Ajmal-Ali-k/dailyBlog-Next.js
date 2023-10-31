import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>sign in with Google </div>
        <div className={styles.socialButton}>sign in with Github</div>
        <div className={styles.socialButton}>sign in with FaceBook</div>
      </div>
    </div>
  );
};

export default LoginPage;
