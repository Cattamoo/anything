import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import {login, logout} from "../apis/firebase";
import Loading from "./common/Loading";
import UserInformation from "./common/UserInformation";

export default function LoginUser() {
	const user = useSelector((state: RootState) => state.auth.user);

	if(user === undefined) {
		return <Loading className="my-2 mr-14 text-zinc-500" />
	}

	return (
		<div className="flex items-center gap-4">
			{
				user && <UserInformation {...user} />
			}
			<button className="px-4 py-1 rounded bg-amber-100 hover:bg-amber-200" onClick={user ? logout : login}>{user ? 'Logout' : 'Login'}</button>
		</div>
	);
}