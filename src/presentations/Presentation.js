import React from "react";
import styles from "./Presentation.module.css";

const Presentation = props => {
    return (
        <div className={styles.presentation}>
            {props.embed}
            <h1 className={styles.title}>{props.title}</h1>
            <a className={styles.download} href={props.file} target="_blank" download>Download PDF</a>
        </div>
    );
};

export default Presentation;