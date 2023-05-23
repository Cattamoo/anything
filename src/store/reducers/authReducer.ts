import {createSlice} from "@reduxjs/toolkit";
import {UserState} from "../../types/userType";

const initialState: UserState = {
	user: undefined,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, { payload }) {
			return {
				user: payload,
			}
		}
	}
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;