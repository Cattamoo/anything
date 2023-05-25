import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Board} from "../types/dataType";
import {removeBoard} from "../store/reducers/boardReducer";
import {BsTrash} from "react-icons/bs";

type Props = {
	board: Board;
	uid: string;
}

export default function BoardItem({ board, uid }: Props) {
	const dispatch = useDispatch();
	const handleRemove = () => {
		dispatch(removeBoard({ id: board.bid }));
	}
	return (
		<li className="w-full hover:bg-zinc-50 p-2">
			<Link to={`/board/${board.bid}`} className="flex items-center gap-4">
				<h2 className="text-xl font-bold">{board.title}</h2>
				{
					uid && board.uid === uid && (
							<button onClick={handleRemove} title="삭제">
								<BsTrash />
							</button>
					)
				}
			</Link>
		</li>
	);
}