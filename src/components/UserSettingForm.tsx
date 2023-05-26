import React, {FormEventHandler, useEffect, useState} from 'react';
import Input from "./ui/Input";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import Button from "./ui/Button";
import {useNavigate} from "react-router-dom";
import {saveConfirm} from "../utils/comfirm";
import {setUserNickname, setUserProfile} from "../apis/firebase";
import ImageUploader from "./common/ImageUploader";
import {getImageUrlToFile, uploadImage} from "../apis/cloudinary";

export default function UserSettingForm() {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth.user && state.users[state.auth.user.uid]);
	const [nickname, setNickname] = useState(user?.nickname || '');
	const [profileImage, setProfileImage] = useState<File | null>(null);

	const handleFileUpload = (file: File | null) => {
		setProfileImage(file);
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		if(saveConfirm()) {
			setUserNickname(user?.uid!, nickname);
			setUserProfile(user?.uid!, profileImage ? await uploadImage(profileImage).then(image => image.url) : '')
			navigate('/');
		}
	}

	useEffect(() => {
		if(user && user.profile) {
			getImageUrlToFile(user.profile)
				.then((file) => setProfileImage(file))
			;
		}
	}, [user]);

	return (
		<form className="flex flex-col gap-2 mt-2 px-1" onSubmit={handleSubmit}>
			<ImageUploader defaultImage={user!.photoURL} image={profileImage} handleFileUpload={handleFileUpload} />
			<Input value={user?.email || ''} onChange={() => {}} disabled={true} />
			<Input value={user?.displayName || ''} onChange={() => {}} disabled={true} />
			<Input placeholder="별명 (optional)" value={nickname} onChange={({target}) => setNickname(target.value)} />
			<Button>저장</Button>
		</form>
	);
}