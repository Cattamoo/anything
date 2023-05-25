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
import Invite from "./pages/Invite";
import ProtectedRouter from "./pages/ProtectedRouter";

import reportWebVitals from './reportWebVitals';
import './index.css';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{ index: true, element: <Home /> },
				{ path: '/board/:bid', element: <ProtectedRouter><Board /></ProtectedRouter> },
				{ path: '/board/new', element: <ProtectedRouter><NewBoard /></ProtectedRouter> },
				{ path: '/board/edit/:bid', element: <ProtectedRouter><EditBoard /></ProtectedRouter> },
				{ path: '/post/:bid/:pid', element: <ProtectedRouter><Post /></ProtectedRouter> },
				{ path: '/post/new/:bid', element: <ProtectedRouter><NewPost /></ProtectedRouter> },
				{ path: '/post/edit/:bid/:pid', element: <ProtectedRouter><EditPost /></ProtectedRouter> },
				{ path: '/invite/:bid', element: <ProtectedRouter><Invite /></ProtectedRouter> },
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
