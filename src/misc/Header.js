import React from "react";
import styles from "./header.module.css";

const Header = props => {
    return (
        <h1 className={styles.header}>{props.header}</h1>
    );
};

export default Header;