import React from 'react';
import {Comment as CommentType} from "../types/dataType";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import UserInformation from "./common/UserInformation";
import {FaTrash} from "react-icons/fa";
import {removeComment} from "../store/reducers/commentReducer";

type Props = CommentType;

export default function Comment({ uid, pid, cid, content, createdAt }: Props) {
	const dispatch = useDispatch();
	const { login_uid, user } = useSelector((state: RootState) => ({
		user: state.users[uid],
		login_uid: state.auth.user?.uid,
	}));

	const handleRemove = () => {
		dispatch(removeComment({ pid, cid }))
	}

	return (
		<li className="relative px-4 py-2">
			<div className="flex justify-between">
				{user && <UserInformation {...user} />}
				<div className="text-xs">{createdAt}</div>
			</div>
			<div>{content}</div>
			{
				login_uid === uid && (
					<div className="absolute right-0 top-1/2 -translate-y-2/4 mr-4">
						<button onClick={handleRemove}><FaTrash /></button>
					</div>
				)
			}
		</li>
	);
}