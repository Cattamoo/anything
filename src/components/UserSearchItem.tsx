import React from 'react';
import {UserType} from "../types/userType";
import UserInformation from "./common/UserInformation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import {editBoard} from "../store/reducers/boardReducer";
import Button from "./ui/Button";

type Props = {
	user: UserType;
	bid: string;
}

export default function UserSearchItem({ user, bid }: Props) {
	const dispatch = useDispatch();
	const board = useSelector((state: RootState) => state.boards[bid]);

	const handleAdd = () => {
		dispatch(editBoard({
			...board,
			user: [...board.user, user.uid]
		}));
	}

	const handleRemove = () => {
		dispatch(editBoard({
			...board,
			user: [...board.user.filter((uid) => uid !== user.uid)]
		}));
	}

	return (
		<li className="flex items-center gap-4">
			<UserInformation {...user} />
			{
				board.user.includes(user.uid)
					? <Button onClick={handleRemove} disabled={board.uid === user.uid}>{board.uid === user.uid ? '나' : '제외'}</Button>
					: <Button onClick={handleAdd}>추가</Button>
			}
		</li>
	);
}