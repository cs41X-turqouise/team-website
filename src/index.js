import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from "./root.module.css";
import NavBar from "./nav/NavBar";
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
				element: null // temporary,
			},
			{
				path: 'deliverables',
				element: null // tempoary
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();
