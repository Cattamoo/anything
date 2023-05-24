import {createSlice} from "@reduxjs/toolkit";
import {UserState} from "../../types/userType";

const initialState: UserState = {
	user: undefined,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth(state, { payload }) {
			return {
				user: payload,
			}
		}
	}
})

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;