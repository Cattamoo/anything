import {combineReducers} from "redux";
import authReducer from "./authReducer";
import boardReducer from "./boardReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";

export const rootReducer = combineReducers({
	auth: authReducer,
	boards: boardReducer,
	posts: postReducer,
	users: userReducer,
	comments: commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
