import React from 'react';

type Props = {
	children: React.ReactNode;
	className?: string;
}

export default function PageLayout({ children, className = '' }: Props) {
	return (
		<div className={`relative max-w-screen-md w-full h-full mt-2 ${className}`}>
			{ children }
		</div>
	);
}