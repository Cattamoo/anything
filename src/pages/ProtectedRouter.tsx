import React from 'react';
import {Navigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import Loading from "../components/common/Loading";

type Props = {
	children: React.ReactNode;
}

export default function ProtectedRouter({ children }: Props) {
	const { bid } = useParams();
	const { user, boards } = useSelector((state: RootState) => ({
		user: state.auth.user,
		boards: state.board.boards
	}));

	if(user === undefined || boards === undefined) {
		return <Loading />
	}

	if(!user || (bid && !(boards[bid] || (boards[bid].isPublic && boards[bid].user.includes(user.uid))))) {
		return <Navigate to="/" replace />
	}

	return <>{children}</>;
}