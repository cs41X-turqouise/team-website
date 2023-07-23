import React from "react";
import { Link } from "react-router-dom";

const DropdownItem = (props) => {
	return (
		<div className=" h-10 pr-2
		bg-opacity-25 bg-green-400
		grid justify-items-end content-center">
			
			<Link to={props.path} onClick={props.closeDropdown} className="">{props.pageTitle}</Link>
		</div>
	);
};

export default DropdownItem;