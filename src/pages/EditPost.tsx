import React from 'react';
import PostEditForm from "../components/PostEditForm";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {useParams} from "react-router-dom";
import Loading from "../components/common/Loading";

export default function EditPost() {
	const { bid, id } = useParams();
	const { user, posts } = useSelector((state: RootState) => ({ user: state.auth.user, posts: state.posts }));
	return (
		<div>
			EditPost
			{
				!!user && !!bid && !!id && Object.keys(posts).length !== 0
					? <PostEditForm bid={bid} uid={user.uid} post={posts[bid][id]} />
					: <Loading />
			}
		</div>
	);
}