import React from "react";
import styles from "./Deliverables.module.css";
import Header from "../misc/Header";
import Deliverable from "./Deliverable";
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

            <div className="w-screen">

                <div className="grid grid-cols-1 gap-4 ">

                    {deliverablesData.map((deliverable, key) =>
                        <Deliverable
                            key={key}
                            data={deliverable}
                        />
                    )}

                </div>

                <div className="fixed text-sm md:text-base
                 left-1/2 translate-x-[-50%]
                 w-[90vw]
                 md:w-[868px]
                 h-20
                 bottom-0 flex justify-center 
                 backdrop-blur-md border-t-black 
                 border-t-2 border-solid rounded-t-3xl
                 bg-opacity-25 bg-green-400">

                    {options.map((option, key) =>
                        <a
                            key={key}
                            onClick={() => { goToDeliverable(option.replaceAll(' ', '-').toLowerCase()); }}
                            className={styles.navigational}
                        >
                            {option}
                        </a>
                    )}

                </div>
                         
            </div>
        </>
    );
};

export default Deliverables;