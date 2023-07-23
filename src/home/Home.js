import React from "react";
import styles from "./Home.module.css";



const Home = () => {
    return (
        <div className={styles.main}>
            <p className="text-xl text-amber-100 bold">{"Sound Map for a Changing Landscape"}</p>
            <p className="text-sm text-amber-100 "><i>"Fighting Climate Change; One Sound Map at a Time"</i></p>
            <p className="text-sm text-amber-100 ">"Team Turquoise"</p>
        </div>
    );
};

export default Home;