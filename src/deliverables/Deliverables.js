import React from "react";
import styles from "./Deliverables.module.css";
import Header from "../misc/Header";

import currentProcessFlow from "./resources/current_process_flow.png";
import solutionProcessFlow from "./resources/solution_process_flow.png";
import mfcd from "./resources/mfcd.png";
import securityRiskMatrix from "./resources/security_risk_matrix.png";
import competitionMatrix from "./resources/competition_matrix.png";

const images = [
    currentProcessFlow,
    solutionProcessFlow,
    mfcd,
    securityRiskMatrix,
    competitionMatrix
];

const options = [
    "Current Process Flow",
    "Solution Process Flow",
    "MFCD",
    "Competition Matrix",
    "Security Risk Matrix"
];

const goToDeliverable = id => {
    const element = document.getElementById(id);
    element.scrollIntoView();
}

const Deliverables = () => {
    return (
        <>
            <Header header="Deliverables" />
            <div className={styles.main}>
                <div className={styles.deliverables}>
                    {images.map((image, key) => {
                        return (
                            <div className={styles.deliverable} id={options[key].replaceAll(' ', '').toLowerCase()}>
                                <img className={styles.image} src={image} />
                                <h1 className={styles.title}>{options[key]}</h1>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.navigation}>
                    {options.map((option, key) =>
                        <a
                            key={key}
                            onClick={() => { goToDeliverable(options[key].replaceAll(' ', '').toLowerCase()); }}
                            className={styles.navigational}
                        >
                            {option}
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};

export default Deliverables;