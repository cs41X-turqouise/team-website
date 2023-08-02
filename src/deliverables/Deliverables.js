import React from "react";
import "./Deliverables.module.css";
import Header from "../misc/Header";
import Deliverable from "./Deliverable";
import DeliverablePreview from "./DeliverablePreview";
import { deliverablesData } from "./deliverablesData";

const options = [
    "Current Process Flow",
    "Solution Process Flow",
    "MFCD",
    "Competition Matrix",
    "Algorithm Flow",
    "GUI Mockups",
    "Database Schema",
    "Technical Risks",
    "Security Risks",
    "Customer Risks",
    "Legal Risks"
];

const goToDeliverable = id => {
    const element = document.getElementById(id);
    element.scrollIntoView();
};

const Deliverables = () => {
    return (
        <>
            <Header header="Deliverables" />

            <div className="grid">

                <div className="w-3/4 justify-self-center grid grid-cols-3 gap-1">

                    {deliverablesData.map((deliverable, key) => {
                            const D = (props) => (<Deliverable onBlur={props.onBlur} data={deliverable}/>)
                            return (
                                <DeliverablePreview key={key} data={deliverable} Deliverable={D}> 
                                    
                                </DeliverablePreview>
                            )
                    })}

                </div>
                         
            </div>
        </>
    );
};

export default Deliverables;