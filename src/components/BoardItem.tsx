import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import {Board} from "../types/dataType";
import {removeBoard} from "../store/reducers/boardReducer";
import Title from "./ui/Title";
import UserInformation from "./common/UserInformation";
import {BsTrash} from "react-icons/bs";
import {removeConfirm} from "../utils/comfirm";

type Props = {
	board: Board;
	uid: string;
}

export default function BoardItem({ board, uid }: Props) {
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.users[board.uid]);
	const handleRemove = () => {
		if(removeConfirm()) {
			dispatch(removeBoard({ id: board.bid }));
		}
	}
	return (
		<li className="w-full flex items-center justify-between gap-4 hover:bg-zinc-50 p-2">
			<Link to={`/board/${board.bid}`} className="flex-1">
				<Title>{board.title}</Title>
				<UserInformation {...user} />
			</Link>
			{
				uid && board.uid === uid && (
					<button onClick={handleRemove} title="삭제">
						<BsTrash />
					</button>
				)
			}
		</li>
	);
}