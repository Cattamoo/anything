import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import {removePost} from "../store/reducers/postReducer";
import UserInformation from "../components/common/UserInformation";
import {FaArrowLeft, FaPenSquare, FaTrash} from "react-icons/fa";
import Loading from "../components/common/Loading";
import CommentWrapper from "../components/CommentWrapper";

export default function Post() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { bid, id } = useParams();
	const { uid, post, users } = useSelector((state: RootState) => ({ uid: state.auth.user?.uid, post: Object.values(state.posts).length !== 0 ? state.posts[bid!][id!] : undefined, users: state.users }));

	const handleRemove = () => {
		dispatch(removePost({ bid, pid: id }));
		navigate(`/board/${bid}`);
	}

	return (
		<div>
			{
				post
					? (
						<>
							<div className="relative flex flex-col items-center mt-4 pb-2 mb-2 shadow-[0_5px_10px_-3px_#d0d0cf]">
								<h2 className="text-xl font-bold">{post.title}</h2>
								<UserInformation {...users[post.uid]} />
								<div className="text-xs">
									<div>생성일자: {post.createdAt}</div>
									<div>수정일자: {post.updatedAt}</div>
								</div>
								<div className="absolute left-0 top-0 ml-2">
									<Link to={`/board/${post.bid}`}><FaArrowLeft/></Link>
								</div>
								{
									post.uid === uid && (
										<div className="absolute right-0 top-1/2 -translate-y-2/4 flex flex-col gap-2 mr-2">
											<Link to={`/post/edit/${post.bid}/${post.pid}`}><FaPenSquare/></Link>
											<button onClick={handleRemove}><FaTrash/></button>
										</div>
									)
								}
							</div>
							<p className="py-2 px-4 select-text whitespace-pre-line">{post.content}</p>
							<CommentWrapper pid={id!} uid={uid!} />
						</>
					)
					: <Loading />
			}
		</div>
	);
}