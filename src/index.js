import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from "./root.module.css";
import NavBar from "./nav/NavBar";
import Home from "./home/Home";
import Team from "./team/Team";
import Deliverables from './deliverables/Deliverables';
import Presentations from "./presentations/Presentations";
import ProjectDescription from './project_description/ProjectDescription';
import References from "./references/References";
import { createHashRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// Handles website path rendering
const router = createHashRouter([
	{
		path: '/',
		element: <NavBar />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: 'team',
				element: <Team />
			},
			{
				path: 'project-description',
				element: <ProjectDescription />
			},
			{
				path: 'presentations',
				element: <Presentations />
			},
			{
				path: 'deliverables',
				element: <Deliverables />
			},
			{
				path: 'references',
				element: <References />
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();