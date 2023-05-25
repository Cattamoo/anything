import React, {FormEventHandler, useState} from 'react';
import {useDispatch} from "react-redux";
import {createComment} from "../store/reducers/commentReducer";

type Props = {
	pid: string;
	uid: string;
}

export default function CommentEditForm({ pid, uid }: Props) {
	const dispatch = useDispatch();
	const [commentText, setCommentText] = useState('');

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		dispatch(createComment({ pid, uid, content: commentText }));
		resetInput();
	}

	const resetInput = () => {
		setCommentText('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<textarea value={commentText} onChange={({target}) => setCommentText(target.value)} />
			<button disabled={commentText === ''}>저장</button>
		</form>
	);
}