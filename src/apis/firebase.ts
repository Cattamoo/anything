import { initializeApp } from 'firebase/app';
import {
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
import {Board} from "../types/dataType";
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
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
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