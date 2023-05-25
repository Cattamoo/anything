import React, {FormEventHandler, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import {createBoard, editBoard} from "../store/reducers/boardReducer";
import {Board} from "../types/dataType";
import Input from "./ui/Input";
import Button from "./ui/Button";

type Props = {
	board?: Board;
}

export default function BoardEditForm({ board }: Props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.auth.user);
	const [titleText, setTitleText] = useState(board?.title || '');
	const [isPublic, setIsPublic] = useState(board?.isPublic || false);

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		// TODO: Public Board 설정 임시로 막기
		setIsPublic(false);
		if(board) {
			dispatch(editBoard({ ...board, title: titleText, isPublic }));
			navigate(`/board/${board.bid}`);
		} else {
			dispatch(createBoard({ uid: user!.uid, title: titleText, isPublic }));
			navigate(`/`);
		}
	}

	return (
		<form className="flex flex-col gap-2 mt-2 px-1" onSubmit={handleSubmit}>
			<Input placeholder="게시판 제목" name="title" value={titleText} onChange={({target}) => setTitleText(target.value)} />
			{/*
			<div>
				<input id="isPublic" type="checkbox" checked={isPublic} onChange={({target}) => setIsPublic(target.checked)} />
				<label className="ml-1" htmlFor="isPublic">공개 게시판으로 설정합니다. (optional)</label>
			</div>
			*/}
			<Button disabled={titleText === ''}>저장</Button>
			<Button type="button" className="bg-zinc-100 hover:bg-zinc-200" onClick={() => navigate(-1)}>취소</Button>
		</form>
	);
}