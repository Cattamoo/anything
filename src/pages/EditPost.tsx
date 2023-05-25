import React from 'react';
import PostEditForm from "../components/PostEditForm";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import {useParams} from "react-router-dom";
import Loading from "../components/common/Loading";
import PageLayout from "../components/layout/PageLayout";
import Title from "../components/ui/Title";

export default function EditPost() {
	const { bid, id } = useParams();
	const { user, posts } = useSelector((state: RootState) => ({ user: state.auth.user, posts: state.posts }));
	return (
		<PageLayout>
			<Title>게시글 수정</Title>
			{
				!!user && !!bid && !!id && Object.keys(posts).length !== 0
					? <PostEditForm bid={bid} uid={user.uid} post={posts[bid][id]} />
					: <Loading />
			}
		</PageLayout>
	);
}