import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h1>Carolin Wenzel </h1>
        <Link href="/home">
          <a> Enter</a>
        </Link>
      </div>
    </div>
  );
}
