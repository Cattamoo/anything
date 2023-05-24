import {createSlice} from "@reduxjs/toolkit";
import {UsersState} from "../../types/userType";

const initialState: UsersState = {};

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers(state, { payload }) {
			return payload;
		}
	}
})

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;