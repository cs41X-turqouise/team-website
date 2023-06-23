import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from "./root.module.css";
import NavBar from "./nav/NavBar";
import Team from "./team/Team";
import Glossary from "./glossary/Glossary";
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
				element: null // temporary
			},
			{
				path: 'team',
				element: <Team />
			},
			{
				path: 'deliverables',
				element: null // tempoary
			},
			{
				path: 'glossary',
				element: <Glossary />
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