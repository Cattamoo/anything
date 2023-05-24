import { initializeApp } from 'firebase/app';
import {
	User,
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged
} from 'firebase/auth';
import {
	getDatabase,
	ref,
	set,
	get,
	remove
} from 'firebase/database';
import {Board, Post} from "../types/dataType";
import {Optional} from "../types/typeUtils";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FB_API_KEY,
	authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
	projectId: process.env.REACT_APP_FB_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login() {
	signInWithPopup(auth, provider)
		.then(({user}) => {
			if(user) {
				setUser(user);
			}
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
			console.warn(`[${errorCode}] ${errorMessage} \n\n ${email} / ${credential}`);
		})
	;
}

export function logout() {
	signOut(auth)
		.catch(console.error)
	;
}

export function onUserStateChange(callback: Function) {
	onAuthStateChanged(auth, async (user) => {
		callback(user);
	});
}

export function getUsers() {
	return readDB(`user`);
}

function setUser(user: User) {
	const { uid, displayName, photoURL, email } = user;
	writeDB(`user/${user.uid}`, { uid, displayName, photoURL, email });
}

export function getBoards() {
	return readDB('board');
}

export function createBoard(board: Board) {
	writeDB<Board>(`board/${board.bid}`, board)
}

export function editBoard(board: Board) {
	writeDB<Optional<Board>>(`board/${board.bid}`, board);
}

export function removeBoard(id: string) {
	removeDB(`board/${id}`);
}

export function getPosts() {
	return readDB('post');
}

export function createPost(post: Post) {
	writeDB<Post>(`post/${post.bid}/${post.pid}`, post);
}

export function editPost(post: Post) {
	writeDB<Optional<Post>>(`post/${post.bid}/${post.pid}`, post);
}

export function removePost(bid: string, pid: string) {
	removeDB(`post/${bid}/${pid}`);
}

function readDB(path: string) {
	return get(ref(database, path))
		.then((snapshot) => {
			return snapshot.val();
		})
		.catch(console.error)
	;
}
function writeDB<T>(path: string, data: T) {
	set(ref(database, path), data)
		.catch(console.error)
	;
}
function removeDB(path: string) {
	remove(ref(database, path))
		.catch(console.error)
	;
}