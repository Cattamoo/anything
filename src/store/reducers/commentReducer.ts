import {createSlice} from "@reduxjs/toolkit";
import {CommentsState} from "../../types/dataType";
import {v4 as uuid} from "uuid";
import {createComment as cc, editComment as ec, removeComment as rc} from "../../apis/firebase";
import moment from "moment";

const initialState: CommentsState = {}

const commentSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		setComments(state, { payload }) {
			return payload;
		},
		createComment(state, { payload }) {
			const id = uuid();
			const { pid, uid, content } = payload;
			const newComment = {
				pid,
				uid,
				cid: id,
				content,
				createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
				updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
			};
			if(!state[pid]) {
				state[pid] = {};
			}
			state[pid][id] = newComment;
			cc(newComment);
			return state;
		},
		editComment(state, { payload }) {
			const { pid, cid } = payload;
			state[pid][cid] = payload;
			ec(payload);
			return state;
		},
		removeComment(state, { payload }) {
			const { pid, cid } = payload;
			delete state[pid][cid];
			rc(pid, cid);
			return state;
		}
	}
});

export const { setComments, createComment, editComment, removeComment } = commentSlice.actions;

export default commentSlice.reducer;