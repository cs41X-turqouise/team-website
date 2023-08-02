import React from "react";
import Header from "../misc/Header";
import UserRole from "./UserRole";

const users = [
    {
        role: "User",
        stories: [
            "I want to be able to zoom and navigate around the map.",
            "I want to be able to view contributed artifacts in a multimedia experience in a full view.",
            "I would like the ability to click on specific locations around the sound map to view artifacts.",
            "I want to be able to switch between map styles (regular, satellite, 3d, etc.)",
            "I want to be able to login to my Google account.",
            "I want to be able to upload artifacts at a specified longitude and latitude in the Chesapeake area.",
            "I want to see map markers group together when too close.",
            "I want to be able to view contributed artifacts in a multimedia experience.",
            "I want to be able to filter artifacts based on different criteria, such as by audio, images. uploaded time range, collaborator, and multimedia artifacts.",
            "I want to have the ability to delete my artifacts.",
            "I want to have the ability to edit my pre-existing artifacts.",
            "I want to be able to download an artifact to my machine."
        ]
    },
    {
        role: "Admin",
        stories: [
            "I want to see flagged artifacts."
        ]
    },
    {
        role: "Super Admin",
        stories: [
            "I want to have the ability to delete and allow access to admin accounts.",
            "I want to have full control over the artifacts contributed to organize and update the collection as needed.",
            "I want to be able to set a list of weekly recommended content for users to view."
        ]
    }
];

const UserStories = () => {
    return (
        <>
            <Header header="User Stories" />
            
            {users.map((user, key) =>
                <UserRole key={key} user={user} />
            )}
        </>
    );
};

export default UserStories;