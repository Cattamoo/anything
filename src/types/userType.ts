export interface UserType {
	displayName: string;
	email: string;
	photoURL: string;
	uid: string;
}

export type AuthState = {
	user: UserType | undefined | null;
}

export type UsersState = { [id: string]: UserType }