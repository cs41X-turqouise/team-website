import React from "react";
import styles from "./ProjectDescription.module.css";
import statementStyles from "./ProjectStatements.module.css";

const Statement = props => {
    return (
        <>
            <div className={styles.description}>
                <h1 className={styles.header}>{props.header}</h1>
                <p className={statementStyles.body}>{props.statement}</p>
            </div>
        </>
    );
};

export default Statement;