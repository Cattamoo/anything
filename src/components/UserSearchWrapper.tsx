import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers/reducers";
import Input from "./ui/Input";
import UserSearchItem from "./UserSearchItem";

export default function UserSearchWrapper() {
	const { bid } = useParams();
	const users = useSelector((state: RootState) => state.users);
	const [searchText, setSearchText] = useState('');
	return (
		<div className="flex flex-col">
			<Input placeholder="검색할 사용자의 메일주소를 입력해주세요." value={searchText} onChange={({ target }) => setSearchText(target.value)} />
			<ul>
				{
					Object
						.values(users)
						.filter((user) => searchText.length > 5 && user.email.match(searchText))
						.map((user) => <UserSearchItem key={user.uid} bid={bid!} user={user} />)
				}
			</ul>
		</div>
	);
}