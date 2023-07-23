import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
	return (
		<div className="flex items-center">
			<Link to={props.path} className={props.class ? props.class : ""}>{props.pageTitle}</Link>
		</div>
	);
};

export default NavItem;