import React, {FormEventHandler, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Input from "./ui/Input";
import {Post} from "../types/dataType";
import {createPost, editPost} from "../store/reducers/postReducer";

type Props = {
	bid: string;
	uid: string;
	post?: Post;
}

export default function PostEditForm({ bid, uid, post }: Props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [titleText, setTitleText] = useState(post?.title || '');
	const [contentText, setContentText] = useState(post?.content || '');

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if(post) {
			dispatch(editPost({ ...post, title: titleText, content: contentText }));
			navigate(`/post/${bid}/${post.pid}`);
		} else {
			dispatch(createPost({ bid, uid, title: titleText, content: contentText }));
			navigate(`/board/${bid}`);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input placeholder="제목" name="title" value={titleText} onChange={({target}) => setTitleText(target.value)} />
			<textarea placeholder="내용" name="content" value={contentText} onChange={({target}) => setContentText(target.value)} />
			<button disabled={titleText === '' && contentText === ''}>저장</button>
		</form>
	);
}