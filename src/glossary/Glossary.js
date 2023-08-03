import React from "react";
import Header from "../misc/Header";
import GlossaryItem from "./GlossaryItem";
import styles from "../misc/scope.module.css";

const words = [
    {
        word: "Accessibility",
        definition: "How easy the software is to use and understand, particularly by those who may not have extensive knowledge of the technology."
    },
    {
        word: "Agile Development",
        definition: "A software development methodology that emphasizes a focus on the customer and allows for high adaptability."
    },
    {
        word: "Artifact",
        definition: "Any audio recording, image, artwork, video, news report, or personal experience a user or artist wishes to contribute to the sound map."
    },
    {
        word: "Functionality",
        definition: "The software should meet the goal and requirements of the user."
    },
    {
        word: "Digital Archive",
        definition: "A collection of different digital materials, such as artifacts, stored in a database."
    },
    {
        word: "GUI",
        definition: "Short for Graphical User Interface, a visual way of interacting with a computer program."
    },
    {
        word: "Maintainability",
        definition: "The software should be easy to modify and update when needed."
    },
    {
        word: "Natural Soundscape",
        definition: "The acoustic environment of a particular location created by the aggregate of sounds that one can hear and associate with that environment."
    },
    {
        word: "Normalization",
        definition: "Converting differently formatted artifacts into a uniform, standard format that the system can effectively manage and display."
    },
    {
        word: "Performance",
        definition: "The software should have good speed, efficiency, and resource utilization."
    },
    {
        word: "Reliability",
        definition: "The software should be dependable and have minimum errors or bugs."
    },
    {
        word: "Reusability",
        definition: "The software should be able to reuse components or modules in different contexts or projects."
    },
    {
        word: "Scalability",
        definition: "The software should be able to handle increased workload or demand without compromising quality or performance."
    },
    {
        word: "Security",
        definition: "The software should be resistant to external attacks and protect the data and privacy of the user."
    },
    {
        word: "Socially Engaged Art",
        definition: "Art that incorporates user interaction into the exhibit itself."
    },
    {
        word: "Sound Map",
        definition: "A digital geographic map that puts emphasis on the sonic representation of a specific location."
    },
    {
        word: "Sprint",
        definition: "A set period of time during which a specific goal must be accomplished in the Agile Development process."
    },
    {
        word: "Testability",
        definition: "The software should be easy to test and verify for correctness and quality."
    },
    {
        word: "Usability",
        definition: "The software should be easy to learn and use, and have a user-friendly interface."
    }
];

const Glossary = () => {
    return (
        <>
            <Header header="Glossary" />
            <ol className={styles.scope}>
                {words.map((word, key) =>
                    <GlossaryItem key={key} word={word.word} definition={word.definition} />
                )}
            </ol>
        </>
    );
};

export default Glossary;