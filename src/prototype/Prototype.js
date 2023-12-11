import React from "react";
import styles from "./Prototype.module.css";

const Prototype = props => {
    return (
        <div className={styles.prototype}>
            {props.embed}
            <h1 className={styles.title}>{props.title}</h1>
            <a className={styles.download} href={props.file} rel="noreferrer" target="_blank" download>Download PDF</a>
        </div>
    );
};

export default Prototype;
