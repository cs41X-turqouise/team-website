import React from "react";
import styles from "./Deliverable.module.css";

const Deliverable = props => {
    return (
        <div className={styles.deliverable} id={props.id}>
            <img className={styles.image} src={props.image} />
            <h1 className={styles.title}>{props.title}</h1>
        </div>
    );
};

export default Deliverable;