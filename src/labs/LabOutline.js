import React from "react";

const LabOutline = props => {
    return (
        <>
            <h1 className="text-3xl my-5">{props.data.title}</h1>
            {props.data.embed}
        </>
    );
};

export default LabOutline;