import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './App';
import Home from "./pages/Home";
import Board from "./pages/Board";
import Post from "./pages/Post";

import reportWebVitals from './reportWebVitals';
import './index.css';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{ index: true, element: <Home /> },
				{ path: '/board/:id', element: <Board /> },
				{ path: '/post/:id', element: <Post /> },
			]
		}
	]
)

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
