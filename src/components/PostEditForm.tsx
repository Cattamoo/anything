import React, {FormEventHandler, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Post} from "../types/dataType";
import {createPost, editPost} from "../store/reducers/postReducer";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";
import Button from "./ui/Button";

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
		<form className="flex flex-col gap-2 mt-2 px-1" onSubmit={handleSubmit}>
			<Input placeholder="제목" name="title" value={titleText} onChange={({target}) => setTitleText(target.value)} />
			<TextArea className="h-96" placeholder="내용" name="content" value={contentText} onChange={({target}) => setContentText(target.value)} />
			<Button disabled={titleText === '' || contentText === ''}>저장</Button>
		</form>
	);
}