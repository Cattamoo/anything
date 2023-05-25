import React from 'react';

type Props = {
	children: React.ReactNode;
	className?: string;
}

export default function PageLayout({ children, className = '' }: Props) {
	return (
		<div className={`max-w-screen-md w-full mt-2 ${className}`}>
			{ children }
		</div>
	);
}