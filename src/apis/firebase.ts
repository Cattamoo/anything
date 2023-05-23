import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FB_API_KEY,
	authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
	projectId: process.env.REACT_APP_FB_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

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