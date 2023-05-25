import React from 'react';
import ErrorLayout from "../layout/ErrorLayout";
import {FaSpinner} from "react-icons/fa";

export default function PageLoading() {
	return (
		<ErrorLayout Icon={FaSpinner} iconClassName="animate-spin" />
	);
}