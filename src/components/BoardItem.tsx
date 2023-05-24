import React from 'react';
import {useDispatch} from "react-redux";
import {Board} from "../types/dataType";
import {removeBoard} from "../store/reducers/boardReducer";
import {Link} from "react-router-dom";

type Props = {
	board: Board;
	uid: string;
}

export default function BoardItem({ board, uid }: Props) {
	const dispatch = useDispatch();
	const buttonClassName = 'px-2 py-0.5 rounded';
	const handleRemove = () => {
		dispatch(removeBoard({ id: board.bid }))
	}
	return (
		<div className="flex items-center gap-2">
			<Link to={`/board/${board.bid}`}>{board.title}</Link>
			{uid && board.uid === uid && (
				<>
					<Link to={`/board/edit/${board.bid}`} className={`${buttonClassName} bg-blue-100 hover:bg-blue-200`}>수정</Link>
					<button onClick={handleRemove} className={`${buttonClassName} bg-red-100 hover:bg-red-200`}>삭제</button>
				</>
			)}
		</div>
	);
}