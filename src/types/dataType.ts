export interface Board {
	bid: string;
	uid: string;
	title: string;
	user: string[];
	isPublic: boolean;
}

export interface Post {
	pid: string;
	bid: string;
	uid: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	content: string;
}

export interface Comment {
	cid: string;
	pid: string;
	uid: string;
	createdAt: string;
	updatedAt: string;
	content: string;
}

export type BoardsState = { [id: string]: Board };
export type PostsState = { [bid: string]: { [id: string]: Post } };
export type CommentsState = { [pid: string]: { [id: string]: Comment } };