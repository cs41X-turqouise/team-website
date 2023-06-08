import React from "react";
import styles from "./Reference.module.css";

const Reference = (props) => {
    return (
        <a
            className={styles.reference}
            href={props.link}
            target="_blank"
            rel="external"
            referrerPolicy="no-referrer"
        >
            {props.citation}
        </a>
    );
};

export default Reference;