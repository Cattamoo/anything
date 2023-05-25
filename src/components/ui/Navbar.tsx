import React from 'react';
import {Link} from "react-router-dom";
import {BsHouseFill, BsJournalPlus} from "react-icons/bs";

export default function Navbar() {
	return (
		<nav className="flex-1 flex md:justify-center gap-2">
			<Link to="/" className="text-xl font-bold">
				<BsHouseFill />
			</Link>
			<Link to="/board/new" className="text-xl font-bold">
				<BsJournalPlus />
			</Link>
		</nav>
	);
}