import React, {ChangeEventHandler} from 'react';

type Props = {
	className?: string;
	name?: string;
	placeholder?: string;
	value: string;
	onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({ className = '', name = '', placeholder = '', value, onChange }: Props) {
	return (
		<textarea className={`outline-none px-2 py-1 border-l-2 border-zinc-200 hover:border-amber-200 focus:border-amber-300 resize-none ${className}`} name={name} placeholder={placeholder} value={value} onChange={onChange} />
	);
}