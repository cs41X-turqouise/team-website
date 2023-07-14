import React from "react";
import styles from "./NavBar.module.css";
import NavItem from "./NavItem";
import { Outlet } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className={styles.navBar}>
				<NavItem path="/" pageTitle="Home" />
				<NavItem path="team" pageTitle="Team" />
				<NavItem path="project-description" pageTitle="Project Description" />
				<NavItem path="deliverables" pageTitle="Deliverables" />
				<NavItem path="references" pageTitle="References" />
			</nav>
			<Outlet />
		</>
	);
};

export default NavBar;