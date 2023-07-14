import React from "react";
import styles from "./Reference.module.css";

const Reference = (props) => {
    return (
        <div className={styles.reference}>
            <p>
                {props.citation + ' '}
            </p>
            <a
                href={props.link}
                target="_blank"
                rel="external"
                referrerPolicy="no-referrer"
            >
                {props.citationLink}
            </a>
            <p>
                {props.citationLink ? '.' : ''}
            </p>
        </div>
    );
};

export default Reference;