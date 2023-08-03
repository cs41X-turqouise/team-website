import React from "react";
import styles from "./Home.module.css";
import oduLogo from "./resources/odu_logo.png";
import oduCs from "./resources/odu_cs.jpg";

const Home = () => {
    return (
        <>
            <div className={styles.main}>
                <p className="text-xl text-amber-100 bold">{"Sound Map for a Changing Landscape"}</p>
                <p className="text-sm text-amber-100 "><i>"Fighting Climate Change; One Sound Map at a Time"</i></p>
                <p className="text-sm text-amber-100 ">"Team Turquoise"</p>
            </div>
            <div className="fixed start-0 bottom-0 flex flex-row">
                <a href="https://www.odu.edu/" target="_blank">
                    <img className="w-20 h-20 m-2 hover:cursor-pointer" src={oduLogo} alt="ODU" />
                </a>
                <a href="https://www.odu.edu/computer-science" target="_blank">
                    <img className="w-20 h-20 m-2 hover:cursor-pointer" src={oduCs} alt="ODU CS" />
                </a>
            </div>
        </>
    );
};

export default Home;