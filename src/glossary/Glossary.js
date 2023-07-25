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
        word: "Digital Archive",
        definition: "A collection of different digital materials, such as artifacts, stored in a database."
    },
    {
        word: "GUI",
        definition: "Short for Graphical User Interface, a visual way of interacting with a computer program."
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