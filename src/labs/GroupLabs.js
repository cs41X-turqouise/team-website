import React from "react";

const GroupLabs = props => {
    return (
        <div className="flex flex-col items-center text-center p-5">
            <h1 className="text-xl mx-5">{props.data.title}</h1>
            {props.data.embed}
            <a className="underline" rel="noreferrer" href={props.data.download} target="_blank">Download PDF</a>
        </div>
    );
};

export default GroupLabs;
