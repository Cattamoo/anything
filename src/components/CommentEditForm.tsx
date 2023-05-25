import React, {FormEventHandler, useState} from 'react';
import {useDispatch} from "react-redux";
import {createComment} from "../store/reducers/commentReducer";
import TextArea from "./ui/TextArea";
import Button from "./ui/Button";

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
		<form className="flex gap-0.5" onSubmit={handleSubmit}>
			<TextArea className="flex-1" placeholder="댓글을 입력해주세요." value={commentText} onChange={({target}) => setCommentText(target.value)} />
			<Button className="px-4" disabled={commentText === ''}>저장</Button>
		</form>
	);
}