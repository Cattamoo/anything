import React from 'react';
import LoginUser from "../LoginUser";
import Navbar from "./Navbar";

export default function Header() {
	return (
		<header className="w-full flex items-center justify-between p-2 shadow-lg">
			<Navbar />
			<LoginUser />
		</header>
	);
}