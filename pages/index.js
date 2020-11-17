import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h1>Carolin Wenzel </h1>
        <a href="#" className={styles.button}>
          Enter
        </a>
      </div>
    </div>
  );
}
