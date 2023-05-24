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
		<input className={`${className}`} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
	);
}