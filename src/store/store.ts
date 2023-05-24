import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import boardReducer from "./reducers/boardReducer";
import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
	reducer: {
		auth: authReducer,
		boards: boardReducer,
		posts: postReducer,
		users: userReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	})
});

export type RootState = ReturnType<typeof store.getState>;
export default store;