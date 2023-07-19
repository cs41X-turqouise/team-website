import React from "react";
import { useState } from "react";
import styles from "./Deliverables.module.css";
import Header from "../misc/Header";
import Select from "./Select";

import currentProcessFlow from "./resources/current_process_flow.png";
import solutionProcessFlow from "./resources/solution_process_flow.png";
import mfcd from "./resources/mfcd.png";
import securityRiskMatrix from "./resources/security_risk_matrix.png";
import competitionMatrix from "./resources/competition_matrix.png";

const options = [
    "Current Process Flow",
    "Solution Process Flow",
    "MFCD",
    "Competition Matrix",
    "Security Risk Matrix"
];

const Deliverables = () => {
    const [image, setImage] = useState(currentProcessFlow);

    return (
        <>
            <Header header="Deliverables" />
            <div className={styles.deliverables}>
                <Select
                    id="deliverables"
                    options={options}
                    changeImage={newImage => { setImage(newImage); }}
                    currentProcessFlow={currentProcessFlow}
                    solutionProcessFlow={solutionProcessFlow}
                    mfcd={mfcd}
                    securityRiskMatrix={securityRiskMatrix}
                    competitionMatrix={competitionMatrix}
                />
                {image === mfcd ?
                    <img src={image} className={styles.deliverable} alt="Deliverable" width={1024} height={586} /> :
                    <img src={image} className={styles.deliverable} alt="Deliverable" width={1000} height={360} />
                }
            </div>
        </>
    );
};

export default Deliverables;