import React from "react";
import styles from "./Team.module.css";
import Profile from "./profile/Profile";

import defaultPicture from "./profile_pictures/default.png";
import benjaminPicture from "./profile_pictures/benjamin.jpg";
import christianPicture from "./profile_pictures/christian.jpg";
import patrickPicture from "./profile_pictures/patrick.jpg";
import prestinPicture from "./profile_pictures/prestin.jpg";

import aamrBio from "./profile_bios/aamr";
import benjaminBio from "./profile_bios/benjamin";
import brandonBio from "./profile_bios/brandon";
import christianBio from "./profile_bios/christian";
import evanBio from "./profile_bios/evan";
import koriBio from "./profile_bios/kori";
import patrickBio from "./profile_bios/patrick";
import prestinBio from "./profile_bios/prestin";
import thomasBio from "./profile_bios/thomas";

const profiles = [
    {
        picture: defaultPicture,
        fullName: "Aamr Ibrahim",
        role: "Placeholder",
        bio: aamrBio
    },
    {
        picture: benjaminPicture,
        fullName: "Benjamin Johnson",
        role: "Placeholder",
        bio: benjaminBio
    },
    {
        picture: defaultPicture,
        fullName: "Brandon Bedner",
        role: "Placeholder",
        bio: brandonBio
    },
    {
        picture: christianPicture,
        fullName: "Christian Woodington",
        role: "Placeholder",
        bio: christianBio
    },
    {
        picture: defaultPicture,
        fullName: "Evan Goldberg",
        role: "Placeholder",
        bio: evanBio
    },
    {
        picture: defaultPicture,
        fullName: "Kori Fogle",
        role: "Placeholder",
        bio: koriBio
    },
    {
        picture: patrickPicture,
        fullName: "Patrick Meagher",
        role: "Placeholder",
        bio: patrickBio
    },
    {
        picture: prestinPicture,
        fullName: "Prestin Bell",
        role: "Placeholder",
        bio: prestinBio
    },
    {
        picture: defaultPicture,
        fullName: "Thomas Reynolds",
        role: "Placeholder",
        bio: thomasBio
    }
];

const Team = () => {
    return (
        <>
            <h1 className={styles.header}>Meet Team Turquoise</h1>
            <div className={styles.team}>
                {profiles.map((profile, key) =>
                    <Profile
                        key={key}
                        picture={profile.picture}
                        name={profile.fullName}
                        role={profile.role}
                        bio={profile.bio}
                    />
                )}
            </div>
        </>
    );
};

export default Team;