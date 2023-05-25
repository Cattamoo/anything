import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import BoardItem from "../components/BoardItem";
import PageLayout from "../components/layout/PageLayout";

export default function Home() {
	const { user, boards } = useSelector((state: RootState) => ({ user: state.auth.user, boards: state.boards }));

	return (
		<PageLayout>
			Home
			{
				user && Object.keys(boards)
					.filter((key) => boards[key].isPublic || boards[key].user.includes(user.uid))
					.map((key) => (
						<BoardItem key={key} uid={user!.uid} board={boards[key]} />
					))
			}
		</PageLayout>
	);
}