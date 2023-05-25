import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import PageLayout from "../components/layout/PageLayout";
import BoardItem from "../components/BoardItem";
import RequiredAuth from "../components/common/RequiredAuth";
import EmptyList from "../components/common/EmptyList";
import PageLoading from "../components/common/PageLoading";

export default function Home() {
	const { user, boards } = useSelector((state: RootState) => ({ user: state.auth.user, boards: state.board.boards }));

	return (
		<PageLayout>
			<ul className="flex flex-col gap-2 mt-2">
				{
					user === undefined || boards === undefined
						? <PageLoading />
						: user === null
							? <RequiredAuth />
							: Object.keys(boards).filter((key) => boards[key].isPublic || boards[key].user.includes(user.uid)).length !== 0
								? (
									Object.keys(boards)
										.filter((key) => boards[key].isPublic || boards[key].user.includes(user.uid))
										.map((key) => (
											<BoardItem key={key} uid={user!.uid} board={boards[key]} />
										))
								)
								: <EmptyList />
				}
			</ul>
		</PageLayout>
	);
}