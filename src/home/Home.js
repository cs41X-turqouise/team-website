import React from "react";
import styles from "./Home.module.css";



const Home = () => {
    return (
        <ul className={styles.main}>
            <h1 className={styles.title}>{"Sound Map for a Changing Landscape"}</h1>
            <h2 className={styles.title}>{<i>"Fighting Climate Change; One Sound Map at a Time"</i>}</h2>
            <h4 className={styles.title}>{"Team Turquoise"}</h4>
        </ul>
    );
};

export default Home;