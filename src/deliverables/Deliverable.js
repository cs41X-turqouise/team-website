import React, { useEffect, useState } from "react";
import Risks from "./Risks";
import NavArrows from "./NavArrows";

const arrowColorAvailable = "rgb(220, 220, 220)";
const arrowColorUnavailable = "gray";

const Deliverable = props => {
    const [matrixIndex, setMatrixIndex] = useState(0);
    const [leftArrowColor, setLeftArrowColor] = useState({ backgroundColor: arrowColorAvailable });
    const [rightArrowColor, setRightArrowColor] = useState({ backgroundColor: arrowColorAvailable });

    const changeArrows = index => {
        if (index - 1 < 0) {
            setLeftArrowColor({ backgroundColor: arrowColorUnavailable });
        } else {
            setLeftArrowColor({ backgroundColor: arrowColorAvailable });
        }

        if (index + 1 >= props.data.images.length) {
            setRightArrowColor({ backgroundColor: arrowColorUnavailable });
        } else {
            setRightArrowColor({ backgroundColor: arrowColorAvailable });
        }
    }

    const changeMatrix = incrementAmount => {
        setMatrixIndex(prevIndex => {
            if (prevIndex + incrementAmount < 0) {
                return prevIndex;
            } else if (prevIndex + incrementAmount >= props.data.images.length) {
                return prevIndex;
            }

            changeArrows(prevIndex + incrementAmount);
            
            return prevIndex + incrementAmount;
        });
    };

    useEffect(() => {
        changeArrows(matrixIndex);
    }, []);

    return (
        <div className="grid" id={props.data.id}>

            {props.data.specifications.isRisks
                ?
                <Risks
                    data={props.data}
                    matrixIndex={matrixIndex}
                />
                :
                <img
                    className={"col-span-1 justify-self-center" + " " + props.data.specifications.additionalStyles}
                    src={props.data.images[matrixIndex]}
                />
            }

            {props.data.specifications.iterable &&
                <NavArrows
                    leftArrowColor={leftArrowColor}
                    rightArrowColor={rightArrowColor}
                    changeMatrix={ offset => { changeMatrix(offset); } }
                />
            }

            <h1 className="text-center text-5xl p-5">{props.data.title}</h1>
            
        </div>
    );
};

export default Deliverable;