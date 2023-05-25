import React from 'react';
import PageLayout from "../components/layout/PageLayout";
import Title from "../components/ui/Title";
import BoardEditForm from "../components/BoardEditForm";

export default function NewBoard() {
	return (
		<PageLayout>
			<Title>게시판 추가</Title>
			<BoardEditForm />
		</PageLayout>
	);
}