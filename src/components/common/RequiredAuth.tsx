import React from 'react';
import ErrorLayout from "../layout/ErrorLayout";
import {BsFileLock2Fill} from "react-icons/bs";

export default function RequiredAuth() {
	return (
		<ErrorLayout Icon={BsFileLock2Fill} message="로그인이 필요합니다." />
	);
}