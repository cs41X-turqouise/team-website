import React from "react";
import styles from "../misc/item.module.css";

const UserStory = props => {
    return (
        <p className={styles.item}>{'-' + props.story}</p>
    );
};

export default UserStory;