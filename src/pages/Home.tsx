import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import BoardItem from "../components/BoardItem";

export default function Home() {
	const boards = useSelector((state: RootState) => state.boards);
	return (
		<div>
			Home
			{
				Object.keys(boards).map(key => <BoardItem key={key} board={boards[key]} />)
			}
		</div>
	);
}