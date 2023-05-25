import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import {removeComment} from "../store/reducers/commentReducer";
import {Comment as CommentType} from "../types/dataType";
import UserInformation from "./common/UserInformation";
import CommentEditForm from "./CommentEditForm";
import {FaEdit, FaTrash} from "react-icons/fa";

type Props = { comment: CommentType };

export default function Comment({ comment }: Props) {
	const dispatch = useDispatch();
	const { uid, pid, cid, content, updatedAt } = comment;
	const { login_uid, user } = useSelector((state: RootState) => ({
		user: state.users[uid],
		login_uid: state.auth.user?.uid,
	}));
	const [editMode, setEditMode] = useState(false);

	const handleToggleEditMode = () => {
		setEditMode((prevState) => !prevState);
	}

	const handleRemove = () => {
		dispatch(removeComment({ pid, cid }))
	}

	return (
		<li className="px-4 py-2 bg-white shadow">
			<div className="flex items-center justify-between pb-2">
				{user && <UserInformation {...user} />}
				<div className="flex gap-4">
					{
						login_uid === uid && (
							<div className="flex gap-2 text-right">
								<button onClick={handleToggleEditMode}><FaEdit /></button>
								<button onClick={handleRemove}><FaTrash /></button>
							</div>
						)
					}
					<div className="text-xs text-zinc-600">{updatedAt}</div>
				</div>
			</div>
			{
				editMode
					? <CommentEditForm pid={pid} uid={login_uid!} comment={comment} callback={handleToggleEditMode} />
					: (
					<p className="py-2 select-text whitespace-pre-line">
						{content}
					</p>
				)
			}
		</li>
	);
}