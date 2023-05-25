import React from 'react';

type Props = {
	children: React.ReactNode;
	type?: 'submit' | 'button' | 'reset' | undefined;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
}

export default function Button({ type = 'submit', children, className, onClick = () => {}, disabled = false }: Props) {
	return (
		<button type={type} className={`p-1.5 bg-amber-100 rounded hover:bg-amber-200 disabled:bg-zinc-50 disabled:text-zinc-400 ${className}`} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}