import {createSlice} from "@reduxjs/toolkit";
import {UserType} from "../../types/userType";

const initialState: { [id: string]: UserType } = {};

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