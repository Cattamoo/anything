import React from 'react';
import {IconType} from "react-icons";

type Props = {
	Icon: IconType;
	message: string;
	children?: React.ReactNode;
}

export default function ErrorLayout({ Icon, message, children = '' }: Props) {
	return (
		<div className="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center justify-center">
			<Icon className="text-7xl mb-4 text-zinc-400" />
			<p>{message}</p>
			{children}
		</div>
	);
}