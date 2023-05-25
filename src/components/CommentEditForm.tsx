import React, {FormEventHandler, useState} from 'react';
import {useDispatch} from "react-redux";
import {createComment, editComment} from "../store/reducers/commentReducer";
import {Comment} from "../types/dataType";
import TextArea from "./ui/TextArea";
import Button from "./ui/Button";

type Props = {
	pid: string;
	uid: string;
	comment?: Comment;
	callback?: Function;
}

export default function CommentEditForm({ pid, uid, comment, callback = () => {} }: Props) {
	const dispatch = useDispatch();
	const [commentText, setCommentText] = useState(comment ? comment.content : '');

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if(comment) {
			dispatch(editComment({...comment, content: commentText}));
			callback();
		} else {
			dispatch(createComment({ pid, uid, content: commentText }));
			resetInput();
		}
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