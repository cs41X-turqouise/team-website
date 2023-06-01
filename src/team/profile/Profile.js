import React from "react";
import styles from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <img className={styles.picture} src={props.picture} alt="Profile" />
            <h3 className={styles.name}>{props.name}</h3>
            <p className={styles.role}>{props.role}</p>
            <p className={styles.bio}>{props.bio}</p>
        </div>
    );
};

export default Profile;