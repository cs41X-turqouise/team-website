import React from "react";
import Header from "../misc/Header";
import Presentation from "./Presentation";
import styles from "./Presentations.module.css";

const embedFeasibility = <iframe title="feasibility" src="https://docs.google.com/presentation/d/e/2PACX-1vQHBOAg_irXs-apvJjKvWUBUbuKQQ-dyRxRfuV_dkLXmBaMfhXWrN6BULJBpxldi9U_aPkyGuITQXLt/embed?start=false&loop=false&delayms=3000" width="960" height="569" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>;
const embedFeasibilityRevised = <iframe title="revised feasibility" src="https://docs.google.com/presentation/d/e/2PACX-1vTGdRE2uwrS1wcjcmYkI-aPDukqRsnOzyADRLHIGUkxtYiA-PnpWRD2yE3v9z7rWHsPmMYqHgw6B5Jz/embed?start=false&loop=false&delayms=3000" width="960" height="569" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>;
const embedDesign = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSsfmQ45XrpiP6nRHsqftVB0rDKV4oHz-PXISBIYImQDsge27hFR3w3rOjsahBOwqW-1CUtxLex3p0I/embed?start=false&loop=false&delayms=3000" width="960" height="569" allowfullscreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>;
const embedDesignRevised = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSvV_zge-OF8IFvOeSROCHEIA9uMM_9hDaiV4GSLWXyRwI6rTNrpMqTqMOrRsh3fFtYk9TYxnuL908_/embed?start=false&loop=false&delayms=3000" width="960" height="569" allowfullscreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>;

const presentations = [
    {
        title: "Feasibility",
        embed: embedFeasibility,
        file: "https://drive.google.com/file/d/1olp0SNUJ8frQo9Vw51SGQRVbxFDz0-VN/view?usp=sharing"
    },
    {
        title: "Feasibility - Revised",
        embed: embedFeasibilityRevised,
        file: "https://drive.google.com/file/d/1mZqM1ZEZBy7DIcRCTDw-1pV76PwQ5ekb/view?usp=sharing"
    },
    {
        title: "Design",
        embed: embedDesign,
        file: "https://drive.google.com/file/d/1SoYxOml2TIMuEN1YuGqOdgsn6RFVrJk4/view?usp=sharing"
    },
    {
        title: "Design - Revised",
        embed: embedDesignRevised,
        file: "https://drive.google.com/file/d/1otaEvBusnRWtGcs1LFLxWlbQA9hlNqq_/view?usp=sharing"
    }
];

const Presentations = () => {
    return (
        <>
            <Header header="Presentations" />
            <div className={styles.presentations}>
                {presentations.map((presentation, key) =>
                    <Presentation
                        title={presentation.title}
                        embed={presentation.embed}
                        file={presentation.file}
                    />
                )}
            </div>
        </>
    );
};

export default Presentations;