import React from "react";
import Header from "../components/Header";
import styles from "./home.module.scss";
import Head from "next/head";

const home = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.homeImg}>
        <img src="prazer.jpg" />
      </div>
    </div>
  );
};

export default home;
