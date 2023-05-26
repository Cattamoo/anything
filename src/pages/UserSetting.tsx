import React from 'react';
import PageLayout from "../components/layout/PageLayout";
import Title from "../components/ui/Title";
import UserSettingForm from "../components/UserSettingForm";

export default function UserSetting() {
	return (
		<PageLayout>
			<Title>사용자 설정</Title>
			<UserSettingForm />
		</PageLayout>
	);
}