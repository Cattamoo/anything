import React from 'react';
import {UserType} from "../../types/userType";

type Props = UserType;

export default function UserInformation({ photoURL, email, displayName, nickname, profile }: Props) {
	return (
		<div className="flex items-center gap-2">
			<img className="w-8 rounded-full" src={profile || photoURL} alt={email} />
			<span>{nickname || displayName}</span>
		</div>
	);
}