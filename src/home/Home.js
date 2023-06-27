import React from "react";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <ul className={styles.main}>
            <h1 className={styles.title}>{"<Project Name>"}</h1>
            <h2 className={styles.title}>{"<Project Slogan>"}</h2>
            <h2 className={styles.title}>{"CS 410"}</h2>
            <h2 className={styles.title}>{"Team Turquoise"}</h2>
        </ul>
    );
};

export default Home;