import React from "react";
import styles from "./Reference.module.css";

const Reference = (props) => {
    return (
        <div className={styles.reference}>
            <p className={styles.p}>
                {props.citation + ' '}
            </p>
            <a
                className={styles.a}
                href={props.link}
                target="_blank"
                rel="external"
                referrerPolicy="no-referrer"
            >
                {props.citationLink}
            </a>
            <p className={styles.p}>
                {props.citationLink ? '.' : ''}
            </p>
        </div>
    );
};

export default Reference;