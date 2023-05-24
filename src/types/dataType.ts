export interface Board {
	bid: string;
	uid: string;
	title: string;
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