import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import PageLayout from "../components/layout/PageLayout";
import Loading from "../components/common/Loading";
import Title from "../components/ui/Title";
import BoardEditForm from "../components/BoardEditForm";

export default function EditBoard() {
	const { bid } = useParams();
	const boards = useSelector((state: RootState) => state.boards);

	return (
		<PageLayout>
			<Title>게시판 수정</Title>
			{boards[bid!] ? <BoardEditForm board={boards[bid!]} /> : <Loading />}
		</PageLayout>
	);
}