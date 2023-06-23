import React from "react";
import styles from "./Glossary.module.css";

const terms = [
    {
        word: "Sound Map",
        definition: "placeholder"
    }
];

const Glossary = () => {
    return (
        <div className={styles.glossary}>
            {terms.map((term, key) =>
                <p key={key} className={styles.item}>{term.word + " - " + term.definition}</p>
            )}
        </div>
    );
};

export default Glossary