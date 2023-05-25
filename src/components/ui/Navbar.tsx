import React from 'react';
import {Link} from "react-router-dom";
import {BsHouseFill, BsJournalPlus} from "react-icons/bs";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/reducers";

export default function Navbar() {
	const user = useSelector((state: RootState) => state.auth.user)
	return (
		<nav className="flex-1 flex md:justify-center gap-2">
			<Link to="/" className="text-xl font-bold">
				<BsHouseFill />
			</Link>
			{
				user && (
					<Link to="/board/new" className="text-xl font-bold">
						<BsJournalPlus />
					</Link>
				)
			}
		</nav>
	);
}