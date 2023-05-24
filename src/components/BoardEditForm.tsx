import React, {FormEventHandler, useState} from 'react';
import Input from "./ui/Input";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {Board} from "../types/dataType";
import {createBoard, editBoard} from "../store/reducers/boardReducer";

type Props = {
	board?: Board;
}

export default function BoardEditForm({ board }: Props) {
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.auth.user);
	const [titleText, setTitleText] = useState(board?.title || '');
	const [isPublic, setIsPublic] = useState(board?.isPublic || false);

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if(board) {
			dispatch(editBoard({ ...board, title: titleText }));
		} else {
			dispatch(createBoard({ uid: user!.uid, title: titleText, isPublic }));
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input placeholder="게시판 제목" name="title" value={titleText} onChange={({target}) => setTitleText(target.value)} />
			<div>
				<input id="isPublic" type="checkbox" checked={isPublic} onChange={({target}) => setIsPublic(target.checked)} />
				<label htmlFor="isPublic">공개 게시판으로 설정합니다. (optional)</label>
			</div>
			<button disabled={titleText === ''}>저장</button>
		</form>
	);
}