import React from "react";
import styles from "../misc/scope.module.css";
import styles2 from "../misc/scope.module.css";
import UserStory from "./UserStory";

const shouldBeArticleAn = c => {
    switch (c) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'A':
        case 'E':
        case 'I':
        case 'O': {
            return true;
        }
        default: {
            return false;
        }
    }
};

const UserRole = props => {
    return (
        <>
            <ul className={styles.scope}>
                <p className={styles2.item}>
                    {shouldBeArticleAn(props.user.role[0]) ? `As an ${props.user.role},` : `As a ${props.user.role},`}
                </p>
                {props.user.stories.map((story, key) =>
                    <UserStory key={key} story={story} />
                )}
            </ul>
        </>
    );
};

export default UserRole;