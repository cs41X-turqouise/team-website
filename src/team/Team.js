import React from "react";
import styles from "./Team.module.css";
import Header from "../misc/Header";
import Profile from "./profile/Profile";

import defaultPicture from "./profile_pictures/default.png";
import aamrPicture from "./profile_pictures/aamr.jpg";
import benjaminPicture from "./profile_pictures/benjamin.jpg";
import brandonPicture from "./profile_pictures/brandon.png";
import brendanPicture from "./profile_pictures/brendan.jpg";
import christianPicture from "./profile_pictures/christian.jpg";
import evanPicture from "./profile_pictures/evan.jpg";
import koriPicture from "./profile_pictures/kori.png";
import patrickPicture from "./profile_pictures/patrick.jpg";
import prestinPicture from "./profile_pictures/prestin.jpg";
import thomasPicture from "./profile_pictures/thomas.jpg";

import aamrBio from "./profile_bios/aamr";
import benjaminBio from "./profile_bios/benjamin";
import brandonBio from "./profile_bios/brandon";
import brendanBio from "./profile_bios/brendan";
import christianBio from "./profile_bios/christian";
import evanBio from "./profile_bios/evan";
import koriBio from "./profile_bios/kori";
import patrickBio from "./profile_bios/patrick";
import prestinBio from "./profile_bios/prestin";
import thomasBio from "./profile_bios/thomas";

const profiles = [
    {
        picture: benjaminPicture,
        fullName: "Benjamin Johnson",
        role: "Developer",
        bio: benjaminBio
    },
    {
        picture: brandonPicture,
        fullName: "Brandon Bedner",
        role: "Developer",
        bio: brandonBio
    },
    {
        picture: christianPicture,
        fullName: "Christian Woodington",
        role: "Developer",
        bio: christianBio
    },
    {
        picture: evanPicture,
        fullName: "Evan Goldberg",
        role: "Lead Developer",
        bio: evanBio
    },
    {
        picture: koriPicture,
        fullName: "Kori Fogle",
        role: "Developer",
        bio: koriBio
    },
    {
        picture: patrickPicture,
        fullName: "Patrick Meagher",
        role: "Developer",
        bio: patrickBio
    },
    {
        picture: prestinPicture,
        fullName: "Prestin Bell",
        role: "Developer",
        bio: prestinBio
    },
    {
        picture: thomasPicture,
        fullName: "Thomas Reynolds",
        role: "Developer",
        bio: thomasBio
    },
    {
        picture: brendanPicture,
        fullName: "Brendan Baylor",
        role: "Mentor",
        bio: brendanBio
    }
];

const Team = () => {
    return (
        <>
            <Header header="Meet Team Turquoise" />
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
