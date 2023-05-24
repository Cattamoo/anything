import {createSlice} from "@reduxjs/toolkit";
import {AuthState} from "../../types/userType";

const initialState: AuthState = {
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