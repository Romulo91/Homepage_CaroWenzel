import styles from "../components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/fotoalbum">Fotoalbum</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
