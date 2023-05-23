import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {UserType} from "./types/userType";
import {onUserStateChange} from "./apis/firebase";
import {setUser} from "./store/reducers/authReducer";
import Header from "./components/ui/Header";

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		onUserStateChange((user: UserType) => {
			dispatch(setUser(user))
		});
	}, [dispatch]);
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
