import React from 'react';
import PageLayout from "../components/layout/PageLayout";
import Title from "../components/ui/Title";
import UserSearchWrapper from "../components/UserSearchWrapper";

export default function BoardUserSetting() {
	return (
		<PageLayout>
			<Title>사용자 설정</Title>
			<UserSearchWrapper />
		</PageLayout>
	);
}