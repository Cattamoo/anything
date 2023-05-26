import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import {login, logout} from "../apis/firebase";
import Loading from "./common/Loading";
import UserInformation from "./common/UserInformation";
import Button from "./ui/Button";

export default function LoginUser() {
	const user = useSelector((state: RootState) => state.auth.user && state.users[state.auth.user.uid]);

	if(user === undefined) {
		return <Loading className="my-2 mr-14 text-zinc-500" />
	}

	return (
		<div className="flex items-center gap-4">
			{
				user && <Link to="/user"><UserInformation {...user} /></Link>
			}
			<Button className="px-4 py-1" onClick={user ? logout : login}>{user ? 'Logout' : 'Login'}</Button>
		</div>
	);
}