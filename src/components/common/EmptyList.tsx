import React from 'react';
import ErrorLayout from "../layout/ErrorLayout";
import {BsClipboard} from "react-icons/bs";

export default function EmptyList() {
	return (
		<ErrorLayout Icon={BsClipboard} message="비어있습니다." />
	);
}