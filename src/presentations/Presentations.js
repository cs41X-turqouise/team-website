import React from "react";
import Header from "../misc/Header";
import Presentation from "./Presentation";
import styles from "./Presentations.module.css";

const embedFeasibility = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQHBOAg_irXs-apvJjKvWUBUbuKQQ-dyRxRfuV_dkLXmBaMfhXWrN6BULJBpxldi9U_aPkyGuITQXLt/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>;
const embedFeasibilityRevised = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTGdRE2uwrS1wcjcmYkI-aPDukqRsnOzyADRLHIGUkxtYiA-PnpWRD2yE3v9z7rWHsPmMYqHgw6B5Jz/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>;

const Presentations = () => {
    return (
        <>
            <Header header="Presentations" />
            <div className={styles.presentations}>
                <Presentation
                    embed={embedFeasibility}
                    title="Feasibility"
                    file="https://drive.google.com/file/d/1olp0SNUJ8frQo9Vw51SGQRVbxFDz0-VN/view?usp=sharing"
                />
                <Presentation
                    embed={embedFeasibilityRevised}
                    title="Feasibility - Revised"
                    file="https://drive.google.com/file/d/1mZqM1ZEZBy7DIcRCTDw-1pV76PwQ5ekb/view?usp=sharing"
                />
            </div>
        </>
    );
};

export default Presentations;