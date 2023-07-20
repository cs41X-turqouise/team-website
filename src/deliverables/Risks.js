import React, { useState, useEffect } from "react";
import deliverableStyles from "./Deliverable.module.css";
import riskStyles from "./Risks.module.css";
import Risk from "./Risk";

const Risks = props => {
    const [matrixIndex, setMatrixIndex] = useState(0);
    const [leftArrowColor, setLeftArrowColor] = useState({ backgroundColor: "rgb(220, 220, 220)" });
    const [rightArrowColor, setRightArrowColor] = useState({ backgroundColor: "rgb(220, 220, 220)" });

    const changeArrows = index => {
        if (index - 1 < 0) {
            setLeftArrowColor({ backgroundColor: "gray" });
        } else {
            setLeftArrowColor({ backgroundColor: "rgb(220, 220, 220)" });
        }

        if (index + 1 >= props.images.length) {
            setRightArrowColor({ backgroundColor: "gray" });
        } else {
            setRightArrowColor({ backgroundColor: "rgb(220, 220, 220)" });
        }
    }

    const changeMatrix = incrementAmount => {
        setMatrixIndex(prevIndex => {
            if (prevIndex + incrementAmount < 0) {
                return prevIndex;
            } else if (prevIndex + incrementAmount >= props.images.length) {
                return prevIndex;
            }

            changeArrows(prevIndex + incrementAmount);
            
            return prevIndex + incrementAmount;
        });
    };

    useEffect(() => {
        changeArrows(matrixIndex);
    }, [])

    return (
        <div className={deliverableStyles.deliverable} id={props.id}>
            <div className={riskStyles.main}>
                <div className={riskStyles.arrow} onClick={() => { changeMatrix(-1); }} style={leftArrowColor}>{"<"}</div>
                <Risk image={props.images[matrixIndex]} descriptions={props.risks[matrixIndex]} />
                <div className={riskStyles.arrow} onClick={() => { changeMatrix(1); }} style={rightArrowColor}>{">"}</div>
            </div>
            <h1 className={deliverableStyles.title}>{props.title}</h1>
        </div>
    );
};

export default Risks;