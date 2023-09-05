import React from "react";
import Header from "../misc/Header";
import LabOutline from "./LabOutline";

const labOutlineEmbed = <iframe className="h-3/4 w-2/5 bg-white" src="https://docs.google.com/document/d/e/2PACX-1vTXEo91EJTtY6Wp8fkQpVxKqNa0Iqs2dkZpuFk-u54ae0TERsKix3wbxbCRqWvITfbUeR2JauC-09Fu/pub?embedded=true"></iframe>;

const labOutline = {
    title: "Lab 1 - Group Outline",
    embed: labOutlineEmbed,
    download: "https://drive.google.com/file/d/1umswBVYoy4J67qym-Uj9u3Mn3wNqFQnv/view?usp=sharing"
};

const Labs = () => {
    return (
        <>
            <Header header="Labs" />
            <div className="flex flex-col justify-start items-center h-screen">
                <LabOutline data={labOutline} />
            </div>
        </>
    );
};

export default Labs;