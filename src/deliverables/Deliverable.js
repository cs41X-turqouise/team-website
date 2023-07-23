import React from "react";
import styles from "./Deliverable.module.css";

const Deliverable = props => {
    return (
        <div className="grid grid-cols-1 border-4 border-black justify-self-center w-9/12 max-w-2xl" id={props.id}>
            <img className="h-72 justify-self-center object-contain bg-black" src={props.image} />
            <h1 className="text-center">{props.title}</h1>
        </div>
    );
};

export default Deliverable;