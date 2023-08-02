import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import NavBar from "./nav/NavBar";
import Home from "./home/Home";
import Team from "./team/Team";
import Deliverables from './deliverables/Deliverables';
import Labs from "./labs/Labs";
import Presentations from "./presentations/Presentations";
import ProjectDescription from './project_description/ProjectDescription';
import References from "./references/References";
import Glossary from "./glossary/Glossary";
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
				path: 'labs',
				element: <Labs />
			},
			{
				path: 'references',
				element: <References />
			},
			{
				path: 'glossary',
				element: <Glossary />
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
document.body.className = "bg-gradient-to-r from-amber-100 to-cyan-200"
reportWebVitals();