import React from "react";
import deliverableStyles from "./Deliverable.module.css";
import riskStyles from "./Risk.module.css";

const Risk = props => {
    return (
        <div className="grid grid-cols-2 gap-1 border-solid ">
            <img className="col-span-2 justify-self-center" src={props.image} />
            <div className="h-[150px] overflow-y-scroll">
                {props.descriptions.risks.map((risk, key) =>
                    <p className={riskStyles.desc} key={key}>{risk}</p>
                )}
            </div>
            <div className="h-[150px] overflow-y-scroll">
                {props.descriptions.mitigations.map((mitigation, key) =>
                    <p className={riskStyles.desc} key={key}>{mitigation}</p>
                )}
            </div>
            <h2 className="col-span-2 justify-self-center">{props.descriptions.title}</h2>
        </div>
    );
};

export default Risk;