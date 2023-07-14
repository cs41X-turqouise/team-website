import React from "react";
import Statement from "./Statement";
import Characteristics from "./Characteristics";
import Header from "../misc/Header";

const problemStatement = "\"One of the things I'm excited about is the possibility that over time, we might be able to actually have these as records of climate change. Sea level rises, the sound of the sea coming closer to the inland, that kind of thing.\" - Brendan Baylor";

const problemCharacteristics = [
    "Temporal Aspect",
    "Geographic Context",
    "Participation and Engagement"
];

const solutionStatement = "Our solution is an interactive sound map that charts the impact of climate change on the Tidewater Region, blending historical and user-submitted audio-visual content for a more comprehensive understanding.";

const solutionCharacteristics = [
    "Interactive Sound Maps",
    "Historical Audio Recordings",
    "Visual Documentation",
    "Spatial Audio Technology",
    "User Interaction",
    "User-Generated Content",
    "Educational Narrative"
];

const ProjectDescription = () => {
    return (
        <>
            <Header header="Project Description" />
            <Statement header="Problem Statement" statement={problemStatement} />
            <Characteristics header="Problem Characteristics" characteristics={problemCharacteristics} />
            <Statement header="Solution Statement" statement={solutionStatement} />
            <Characteristics header="Solution Characteristics" characteristics={solutionCharacteristics} />
        </>
    );
};

export default ProjectDescription;