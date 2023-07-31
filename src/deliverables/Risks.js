import React from "react";
import Risk from "./Risk";

const Risks = props => {
    return (
        <div className="justify-self-center w-9/12 max-w-2xl">

            <Risk
                image={props.data.images[props.matrixIndex]}
                risks={props.data.risks[props.matrixIndex]}
                mitigations={props.data.mitigations[props.matrixIndex]}
                title={props.data.subtitles && props.data.subtitles[props.matrixIndex]}
            />

        </div>
    );
};

export default Risks;