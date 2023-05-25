import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import {Navigate, useParams} from "react-router-dom";

type Props = {
	children: React.ReactNode;
}

export default function ProtectedRouter({ children }: Props) {
	const { bid } = useParams();
	const { user, boards } = useSelector((state: RootState) => ({
		user: state.auth.user,
		boards: state.boards
	}));

	if(!user || (bid && !(boards[bid].isPublic || boards[bid].user.includes(user.uid)))) {
		return <Navigate to="/" replace />
	}

	return <>{children}</>;
}