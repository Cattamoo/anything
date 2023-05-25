import React from 'react';
import BoardEditForm from "../components/BoardEditForm";
import PageLayout from "../components/layout/PageLayout";

export default function NewBoard() {
	return (
		<PageLayout>
			NewBoard
			<BoardEditForm />
		</PageLayout>
	);
}