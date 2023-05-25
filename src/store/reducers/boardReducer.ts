import {createSlice} from "@reduxjs/toolkit";
import {createBoard as cb, editBoard as eb, removeBoard as rb} from "../../apis/firebase";
import {BoardsState} from "../../types/dataType";
import {v4 as uuid} from "uuid";

const initialState: BoardsState = {};

const boardSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {
		setBoards(state, {payload}) {
			return payload;
		},
		createBoard(state, { payload }) {
			const id = uuid();
			const { uid, title, isPublic } = payload;
			const newBoard = {
				bid: id,
				uid,
				title,
				isPublic,
				user: [uid]
			};
			cb(newBoard);
		},
		editBoard(state, { payload }) {
			eb(payload);
		},
		removeBoard(state, { payload }) {
			rb(payload.id);
		}
	}
});

export const {setBoards, createBoard, editBoard, removeBoard} = boardSlice.actions;
export default boardSlice.reducer;