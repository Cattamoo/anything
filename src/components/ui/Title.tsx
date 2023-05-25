import React from 'react';

type Props = {
	children: React.ReactNode;
	className?: string;
}

export default function Title({ children, className = '' }: Props) {
	return (
		<h2 className={`text-xl font-bold ${className}`}>
			{ children }
		</h2>
	);
}