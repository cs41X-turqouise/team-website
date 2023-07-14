import React from "react";
import styles from "./ProjectDescription.module.css";
import characteristicStyles from "./ProjectCharacteristics.module.css";

const Characteristics = props => {
    return (
        <>
            <div className={styles.description}>
                <h1 className={styles.header}>{props.header}</h1>
                <div className={characteristicStyles.body}>
                    {props.characteristics.map((characteristic, key) =>
                        <p className={characteristicStyles.characteristic} key={key}>{characteristic}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Characteristics;