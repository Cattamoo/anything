import React from 'react';
import {Post} from "../types/dataType";
import {Link} from "react-router-dom";
import moment from "moment";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import UserInformation from "./common/UserInformation";

type Props = Post;

export default function PostItem({ bid, uid, pid, title, updatedAt }: Props) {
	const publisher = useSelector((state: RootState) => state.users[uid]);
	return (
		<li className="bg-white p-2 shadow hover:bg-zinc-50">
			<Link to={`/post/${bid}/${pid}`} className="flex justify-between items-center">
				<div className="flex-1">
					<h3 className="text-lg font-bold line-clamp-1">{title}</h3>
					<UserInformation {...publisher} />
				</div>
				<div className="min-w-fit text-sm">{moment(updatedAt).format('YYYY-MM-DD')}</div>
			</Link>
		</li>
	);
}