import React from "react";
import styles from "./about.module.scss";
import Header from "../components/Header";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Francois+One&display=swap"
          rel="stylesheet"
        />
        <link
          link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className={styles.about}>
        <div>
          <img src="../KH.JPG" />
        </div>
        <div className={styles.aboutText}>
          <h2>Carolin Anna Magdalena Wenzel</h2>
          <div className={styles.aboutContext}>
            <p>
              Carolin Wenzel studierte an der Kunstakademie München
              Kunstpädagogik, Bildhauerei und Installation und unterrichtet seit
              2012 Kunst am Gymnasium.
            </p>
          </div>

          <div className={styles.aboutContext}>
            <p>
              Bereits während des Studiums begann sie neben einem
              Studienaufenthalt in Budapest zahlreiche Reisen zu unternehmen;
              unter anderem nach Ägypten, Marokko, Usbekistan, Armenien,
              Georgien, Israel, Japan, Russland, Brasilien, in die USA, die
              Ukraine, die Türkei, den Iran und nach Niederbayern, die bis heute
              als Inspiration für ihre verschiedenen bildnerischen Arbeiten
              dienen. Von 2015 bis 2017 lebte und arbeitete sie in der
              Hafenstadt Porto im Nodern Portugals.
            </p>
          </div>

          <div className={styles.aboutContext}>
            <p>
              In ihren kulissenhaften Installationen greift sie die Poesie von
              Tankstellen, Motelzimmern, Wirtshausschreinen und anderen Orten
              der Durchreise, des Kurzaufenthaltes und der Kontemplation auf und
              sammelt ausserdem die Eindrücke der verschiedenen Exkursionen in
              analogen und digitalen Skizzenbüchern, Fotografien und
              Zeichnungen.
            </p>
          </div>

          <div className={styles.aboutContext}>
            <p>
              Auch der Shutdown des Jahres 2020 hinterließ seine
              hausmütterlichen Spuren - und somit verstricken sich die einstigen
              Fahrtenbücher und Motelschilder in textilen Sehnsuchtsgedecken.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
