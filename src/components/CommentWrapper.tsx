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
		<div className="flex flex-col gap-6 mt-4 pt-4 px-2 pb-2 bg-zinc-50/50">
			<CommentEditForm pid={pid} uid={uid} />
			<ul className="flex flex-col gap-4">
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