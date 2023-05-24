import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {UserType} from "./types/userType";
import {getBoards, getPosts, getUsers, onUserStateChange} from "./apis/firebase";
import {setAuth} from "./store/reducers/authReducer";
import Header from "./components/ui/Header";
import {setBoards} from "./store/reducers/boardReducer";
import {setPosts} from "./store/reducers/postReducer";
import {setUsers} from "./store/reducers/userReducer";

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		onUserStateChange((user: UserType) => dispatch(setAuth(user)));
		getUsers(setUsers);
		getBoards(setBoards);
		getPosts(setPosts);
	}, [dispatch]);
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
