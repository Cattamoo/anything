import React, {useRef} from 'react';
import {FaEdit, FaTrash} from "react-icons/fa";

type Props = {
	defaultImage: string;
	image: File | null;
	handleFileUpload: (file: File | null) => void;
}

export default function ImageUploader({ defaultImage, image, handleFileUpload }: Props) {
	const fileRef = useRef<HTMLInputElement>(null);
	return (
		<div className="self-center relative w-52 flex flex-col gap-2">
			<img className="rounded-full aspect-square object-cover" src={image ? URL.createObjectURL(image) : defaultImage} alt="profile"/>
			<div className="absolute w-52 h-52 flex items-center justify-center gap-6 text-2xl text-white rounded-full bg-black/20 opacity-0 duration-200 hover:opacity-100">
				<button type="button" onClick={() => { fileRef.current?.click() }}>
					<FaEdit />
				</button>
				{
					image && (
						<button type="button" onClick={() => { handleFileUpload(null) }}>
							<FaTrash />
						</button>
					)
				}
			</div>
			<input
				ref={fileRef}
				className="hidden"
				type="file"
				accept="image/png, image/jpeg"
				onChange={({ target }) => {handleFileUpload(target.files && target.files[0])}} />
		</div>
	);
}