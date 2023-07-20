import React from "react";
import deliverableStyles from "./Deliverable.module.css";
import riskStyles from "./Risk.module.css";

const Risk = props => {
    return (
        <div className={riskStyles.vertical}>
            <div className={riskStyles.main}>
                <div className={riskStyles.info}>
                    {props.descriptions.risks.map((risk, key) =>
                        <p className={riskStyles.desc} key={key} style={{ textAlign: "left" }}>{risk}</p>
                    )}
                </div>
                <img className={deliverableStyles.image} src={props.image} />
                <div className={riskStyles.info}>
                    {props.descriptions.mitigations.map((mitigation, key) =>
                        <p className={riskStyles.desc} key={key} style={{ textAlign: "right" }}>{mitigation}</p>
                    )}
                </div>
            </div>
            <h2 className={riskStyles.title}>{props.descriptions.title}</h2>
        </div>
    );
};

export default Risk;