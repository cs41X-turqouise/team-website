import React from "react";
import styles from "../misc/item.module.css";

const GlossaryItem = props => {
    return (
        <div className={styles.item}>
            <p className="font-bold inline">{props.word}: </p>
            <p className="inline">{props.definition}</p>
        </div>
    );
};

export default GlossaryItem;