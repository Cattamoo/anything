import React from 'react';
import PostEditForm from "../components/PostEditForm";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {useParams} from "react-router-dom";

export default function NewPost() {
	const { bid } = useParams();
	const user = useSelector((state: RootState) => state.auth.user);
	return (
		<div>
			NewPost
			{!!user && !!bid && <PostEditForm bid={bid} uid={user.uid}/>}
		</div>
	);
}