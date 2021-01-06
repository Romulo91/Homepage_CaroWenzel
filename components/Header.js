import Head from "next/head";
import styles from "../components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Redressed&display=swap"
            rel="stylesheet"
          />
        </Head>
        <nav>
          <div>
            <h1>Carolin Wenzel</h1>
          </div>
          <div>
            <a href="/home" s>
              Home
            </a>
            <a href="/about">About</a>
            <a href="/fotoalbum">Fotoalbum</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
