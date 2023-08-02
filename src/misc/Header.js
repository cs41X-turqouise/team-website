import React from "react";

const Header = props => {
    return (
        <h1 className="text-6xl w-full text-center text-cyan-950">{props.header}</h1>
    );
};

export default Header;