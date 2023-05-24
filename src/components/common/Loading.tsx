import React from 'react';
import {FaSpinner} from "react-icons/fa";

type Props = {
	className?: string;
}

export default function Loading({ className }: Props) {
	return (
		<FaSpinner className={`${className} animate-spin`} />
	);
}