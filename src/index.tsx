import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

import App from './App';
import Home from "./pages/Home";
import Board from "./pages/Board";
import NewBoard from "./pages/NewBoard";
import EditBoard from "./pages/EditBoard";
import Post from "./pages/Post";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";

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
				{ path: '/board/new', element: <NewBoard /> },
				{ path: '/board/edit/:id', element: <EditBoard /> },
				{ path: '/post/:id', element: <Post /> },
				{ path: '/post/new', element: <NewPost /> },
				{ path: '/post/edit/:id', element: <EditPost /> },
			]
		}
	]
)

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
