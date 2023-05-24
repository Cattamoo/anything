import {createSlice} from "@reduxjs/toolkit";
import {createBoard as cb, editBoard as eb, removeBoard as rb} from "../../apis/firebase";
import {Board} from "../../types/dataType";
import {v4 as uuid} from "uuid";

const initialState: { [id: string]: Board } = {};

const boardSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {
		setBoards(state, {payload}) {
			return payload;
		},
		createBoard(state, { payload }) {
			const id = uuid();
			const { uid, title } = payload;
			const newBoard = {
				bid: id,
				uid,
				title,
			};
			state[id] = newBoard;
			cb(newBoard);
			return state;
		},
		editBoard(state, { payload }) {
			const { bid } = payload;
			state[bid] = payload;
			eb(bid, payload);
			return state;
		},
		removeBoard(state, { payload }) {
			delete state[payload.id];
			rb(payload.id);
			return state;
		}
	}
});

export const {setBoards, createBoard, editBoard, removeBoard} = boardSlice.actions;
export default boardSlice.reducer;