import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import CommentEditForm from "./CommentEditForm";
import Comment from "./Comment";
import moment from "moment";

type Props = {
	pid: string;
	uid: string;
}

export default function CommentWrapper({ pid, uid }: Props) {
	const comments = useSelector((state: RootState) => state.comments[pid]);
	return (
		<div>
			<CommentEditForm pid={pid} uid={uid} />
			<ul>
				{
					comments && (
						Object
							.values(comments)
							.sort((a, b) => moment(a.createdAt).isBefore(b.createdAt) ? 1 : -1)
							.map((comment) => <Comment key={comment.cid} {...comment} />)
					)
				}
			</ul>
		</div>
	);
}