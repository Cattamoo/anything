import {createSlice} from "@reduxjs/toolkit";
import {PostsState} from "../../types/dataType";
import {v4 as uuid} from "uuid";
import moment from "moment";
import {createPost as cp, editPost as ep, removePost as rp} from "../../apis/firebase";

const initialState: PostsState = {};

const postSlicer = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts(state, { payload }) {
			return payload;
		},
		createPost(state, { payload }) {
			const id = uuid();
			const { bid, uid, title, content } = payload;
			const newPost = {
				bid,
				uid,
				pid: id,
				title,
				createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
				updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
				content
			};
			cp(newPost);
		},
		editPost(state, { payload }) {
			ep({
				...payload,
				updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
			});
		},
		removePost(state, { payload }) {
			const { bid, pid } = payload;
			rp(bid, pid);
		}
	}
});

export const { setPosts, createPost, editPost, removePost } = postSlicer.actions;
export default postSlicer.reducer;