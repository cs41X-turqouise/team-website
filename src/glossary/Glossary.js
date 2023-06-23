import React from "react";
import styles from "./Glossary.module.css";
import headerStyle from "../misc/header.module.css";

const terms = [
    {
        word: "Sound Map",
        definition: "placeholder"
    }
];

const Glossary = () => {
    return (
        <>
            <h1 className={headerStyle.header}>Glossary</h1>
            <ol className={styles.glossary}>
                {terms.map((term, key) =>
                    <p key={key} className={styles.item}>{term.word + " - " + term.definition}</p>
                )}
            </ol>
        </>
    );
};

export default Glossary