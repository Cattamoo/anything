import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import boardReducer from "./reducers/boardReducer";

const store = configureStore({
	reducer: {
		auth: authReducer,
		boards: boardReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	})
});

export type RootState = ReturnType<typeof store.getState>;
export default store;