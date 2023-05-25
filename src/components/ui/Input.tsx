import React, {ChangeEventHandler} from 'react';

type Props = {
	className?: string;
	type?: string;
	name?: string;
	placeholder?: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ className = '', type = 'text', name = '', placeholder = '', value, onChange }: Props) {
	return (
		<input className={`outline-none px-2 py-1 border-l-2 border-zinc-200 hover:border-amber-200 focus:border-amber-300 ${className}`} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
	);
}