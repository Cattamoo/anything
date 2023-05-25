import React from 'react';
import BoardEditForm from "../components/BoardEditForm";
import {useParams} from "react-router-dom";
import Loading from "../components/common/Loading";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import PageLayout from "../components/layout/PageLayout";

export default function EditBoard() {
	const { id } = useParams();
	const boards = useSelector((state: RootState) => state.boards);

	return (
		<PageLayout>
			EditBoard
			{boards[id!] ? <BoardEditForm board={boards[id!]} /> : <Loading />}
		</PageLayout>
	);
}