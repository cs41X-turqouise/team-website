import React, {useState, useRef} from "react";
import NavItem from "./NavItem";
import DropdownItem from "./DropdownItem";
import { Outlet } from "react-router-dom";
import MediaQuery from 'react-responsive';
import { CSSTransition, TransitionGroup }  from 'react-transition-group' 
import './transitions.css'



const NavBar = () => {
	const nodeRef = useRef(null);
	const [dropdownVisible, setDropdownVisible] = useState(false);
	function toggleDropdown(){
		setDropdownVisible(!dropdownVisible)
	}
	function closeDropdown(){
		setDropdownVisible(false)
	}
	const mdWidth = 768
	const dropdown = 
		<div ref={nodeRef} 
		class="grow grid grid-cols-1 
		justify-items-stretch align-middle
		gap-1
		backdrop-blur-2xl
		text-base fixed w-screen top-14">
			<DropdownItem path="/" pageTitle="Home" closeDropdown={closeDropdown} />
			<DropdownItem path="team" pageTitle="Team" closeDropdown={closeDropdown} />
			<DropdownItem path="project-description" pageTitle="Project Description" closeDropdown={closeDropdown} />
			<DropdownItem path="presentations" pageTitle="Presentations" closeDropdown={closeDropdown} />
			<DropdownItem path="deliverables" pageTitle="Deliverables" closeDropdown={closeDropdown} />
			<DropdownItem path="references" pageTitle="References" closeDropdown={closeDropdown} />
		</div>
	return (
		<>
			<div class="fixed w-screen h-14 
			 backdrop-blur-xl 
			border-b-black border-b-2 
			border-solid rounded-b-xl
			bg-opacity-25 bg-green-400">
				<nav className="flex justify-between absolute top-1/2 translate-y-[-50%] w-screen p-2">
					<h1 class="text-lg justify-self-start content-center">Changing Landscapes</h1>

					<MediaQuery minWidth={mdWidth}>
						<div class="grow flex justify-evenly  align-middle text-[0.6em] sm:text-sm">
							<NavItem path="/" pageTitle="Home" />
							<NavItem path="team" pageTitle="Team" />
							<NavItem path="project-description" pageTitle="Project Description" />
							<NavItem path="presentations" pageTitle="Presentations" />
							<NavItem path="deliverables" pageTitle="Deliverables" />
							<NavItem path="references" pageTitle="References" />
						</div>
					</MediaQuery>

					<MediaQuery maxWidth={mdWidth}>
						<div className="justify-self-end flex p-2"
						 onClick={toggleDropdown} >
							<svg width="16" height="16" fill="currentColor" className="self-center" > 
								<path fill-rule="evenodd" 
								 d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> 
							</svg>
						</div>

					</MediaQuery>

				</nav>

			</div>
			
			<CSSTransition 
				classNames="example"
				in={dropdownVisible}
				timeout={200}
				nodeRef={nodeRef} >
				<>
				{dropdownVisible && dropdown}
				</>
			</CSSTransition>
			<div class="h-14"></div>
			<Outlet />
		</>
	);
};

export default NavBar;