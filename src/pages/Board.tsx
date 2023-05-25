import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import moment from "moment/moment";
import {RootState} from "../store/reducers/reducers";
import PageLayout from "../components/layout/PageLayout";
import Loading from "../components/common/Loading";
import Title from "../components/ui/Title";
import PostItem from "../components/PostItem";
import {BsFilePlus, BsPencil, BsPersonAdd} from "react-icons/bs";

export default function Board() {
	const { bid } = useParams();
	const { uid, board, posts } = useSelector((state: RootState) => ({ uid: state.auth.user?.uid, board: state.boards[bid!], posts: state.posts[bid!] }));

	return (
		<PageLayout>
			{
				board
					? (
						<>
							<Title className="flex items-center gap-2 py-2 px-1">
								{ board.title }
								{
									uid === board.uid && (
										<>
											<Link to={`/board/edit/${board.bid}`} title="수정">
												<BsPencil />
											</Link>
											<Link to={`/board/${board.bid}`} title="초대">
												<BsPersonAdd />
											</Link>
										</>
									)
								}
								{
									uid && board.user.includes(uid) && (
										<Link to={`/post/new/${board.bid}`} title="새 게시글">
											<BsFilePlus />
										</Link>
									)
								}
							</Title>
							<ul className="flex flex-col gap-2">
								{
									posts && (
										Object
											.values(posts)
											.sort((a, b) => moment(a.createdAt).isBefore(b.createdAt) ? 1 : -1)
											.map((post) => <PostItem key={post.pid} {...post} />)
									)
								}
							</ul>
						</>
					)
					: <Loading />
			}
		</PageLayout>
	);
}