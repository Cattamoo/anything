import React from 'react';
import PostEditForm from "../components/PostEditForm";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import {useParams} from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import Title from "../components/ui/Title";

export default function NewPost() {
	const { bid } = useParams();
	const user = useSelector((state: RootState) => state.auth.user);
	return (
		<PageLayout>
			<Title>게시글 추가</Title>
			{!!user && !!bid && <PostEditForm bid={bid} uid={user.uid}/>}
		</PageLayout>
	);
}