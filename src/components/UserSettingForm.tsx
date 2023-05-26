import React, {FormEventHandler, useState} from 'react';
import Input from "./ui/Input";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import Button from "./ui/Button";
import {useNavigate} from "react-router-dom";
import {saveConfirm} from "../utils/comfirm";
import {setUserNickname} from "../apis/firebase";

export default function UserSettingForm() {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth.user && state.users[state.auth.user.uid]);
	const [nickname, setNickname] = useState(user?.nickname || '');

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if(saveConfirm()) {
			setUserNickname(user?.uid!, nickname);
			navigate('/');
		}
	}

	return (
		<form className="flex flex-col gap-2 mt-2 px-1" onSubmit={handleSubmit}>
			<Input value={user?.email || ''} onChange={() => {}} disabled={true} />
			<Input value={user?.displayName || ''} onChange={() => {}} disabled={true} />
			<Input placeholder="별명 (optional)" value={nickname} onChange={({target}) => setNickname(target.value)} />
			<Button>저장</Button>
		</form>
	);
}