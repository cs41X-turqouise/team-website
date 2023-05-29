import React from "react";
import styles from "./NavItem.module.css";
import { Link } from "react-router-dom";

const NavItem = (props) => {
	return (
		<Link to={props.path} className={styles.navItem}>{props.pageTitle}</Link>
	);
};

export default NavItem;