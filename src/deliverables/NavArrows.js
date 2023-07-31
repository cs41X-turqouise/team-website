import React from "react";

const NavArrows = props => {
    return (
        <div className="flex justify-center mt-2">
            <div className="w-10 h-10 text-center select-none hover:cursor-pointer" onClick={() => { props.changeMatrix(-1); }} style={props.leftArrowColor}>
                <span className="align-middle">{"<"}</span>
            </div>
            <div className="w-10 h-10 text-center select-none hover:cursor-pointer" onClick={() => { props.changeMatrix(1); }} style={props.rightArrowColor}>
                <span className="align-middle">{">"}</span>
            </div>
        </div>
    );
};

export default NavArrows;