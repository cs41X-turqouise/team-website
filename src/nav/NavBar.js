import React from "react";
import NavItem from "./NavItem";
import { Outlet } from "react-router-dom";

const NavBar = () => {
	return (
		<>
		<div class="fixed w-screen h-14 
		p-2 backdrop-blur-xl 
		border-b-black border-b-2 
		border-solid rounded-b-xl
		bg-opacity-25 bg-green-400">
			<nav className="flex justify-between absolute top-1/2 translate-y-[-50%] w-screen">
				<h1 class="inline text-sm sm:text-lg">Changing Landscapes</h1>
				<div class="grow flex justify-evenly  align-middle text-[0.6em] sm:text-sm">
					<NavItem path="/" pageTitle="Home" />
					<NavItem path="team" pageTitle="Team" />
					<NavItem path="project-description" pageTitle="Project Description" />
					<NavItem path="presentations" pageTitle="Presentations" />
					<NavItem path="deliverables" pageTitle="Deliverables" />
					<NavItem path="references" pageTitle="References" />
				</div>
			</nav>
		</div>
		<div class="h-14"></div>
		<Outlet />
		</>
	);
};

export default NavBar;