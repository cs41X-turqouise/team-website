import React from "react";

const Select = props => {
    const handleChange = e => {
        const option = e.target.value;
        let newImage = null;
        if (option === "Current Process Flow") {
            newImage = props.currentProcessFlow;
        } else if (option === "Solution Process Flow") {
            newImage = props.solutionProcessFlow;
        } else if (option === "MFCD") {
            newImage = props.mfcd;
        } else if (option === "Competition Matrix") {
            newImage = props.competitionMatrix;
        } else if (option === "Security Risk Matrix") {
            newImage = props.securityRiskMatrix;
        }

        props.changeImage(newImage);
    };

    return (
        <select name={props.id} id={props.id} onChange={handleChange}>
            {props.options.map((option, key) =>
                <option key={key} id={option.toLowerCase()}>{option}</option>
            )}
        </select>
    );
};

export default Select;