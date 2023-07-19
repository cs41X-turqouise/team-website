import React from "react";
import styles from "./Home.module.css";



const Home = () => {
    return (
        <ul className={styles.main}>
            <header_1 className={`${styles.title} ${styles.header_1}`}>{"Sound Map for a Changing Landscape"}</header_1>
            <header_2 className={`${styles.title} ${styles.header_2}`}>{<i>"Fighting Climate Change; One Sound Map at a Time"</i>}</header_2>
            <header_3 className={`${styles.title} ${styles.header_3}`}>{"Team Turquoise"}</header_3>
        </ul>
    );
};

export default Home;