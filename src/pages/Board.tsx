import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import Loading from "../components/common/Loading";
import PostItem from "../components/PostItem";
import {BsFilePlus} from "react-icons/bs";

export default function Board() {
	const { id } = useParams();
	const { uid, board, posts } = useSelector((state: RootState) => ({ uid: state.auth.user?.uid, board: state.boards[id!], posts: state.posts[id!] }));

	return (
		<div>
			{
				board
					? (
						<>
							<h2 className="flex items-center text-lg font-bold gap-2">
								{ board.title }
								{
									uid && board.user.includes(uid) && (
										<Link to={`/post/new/${board.bid}`} title="새 게시글">
											<BsFilePlus />
										</Link>
									)
								}
							</h2>
							<ul className="flex flex-col gap-2">
								{
									posts && (
										Object.values(posts).map((post) => <PostItem key={post.pid} {...post} />)
									)
								}
							</ul>
						</>
					)
					: <Loading />
			}
		</div>
	);
}