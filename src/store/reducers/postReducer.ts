import {createSlice} from "@reduxjs/toolkit";
import {Post} from "../../types/dataType";
import {v4 as uuid} from "uuid";
import moment from "moment";
import {createPost as cp, editPost as ep, removePost as rp} from "../../apis/firebase";

const initialState: { [bid: string]: { [id: string]: Post } } = {};

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
			if(!state[bid]) {
				state[bid] = {};
			}
			state[bid][id] = newPost;
			cp(newPost);
			return state;
		},
		editPost(state, { payload }) {
			const { bid, pid } = payload;
			state[bid][pid] = {
				...payload,
				updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
			};
			ep(payload);
			return state;
		},
		removePost(state, { payload }) {
			const { bid, pid } = payload;
			delete state[bid][pid];
			rp(bid, pid);
			return state;
		}
	}
});

export const { setPosts, createPost, editPost, removePost } = postSlicer.actions;
export default postSlicer.reducer;