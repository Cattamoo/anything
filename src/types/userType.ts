export interface UserType {
	displayName: string;
	email: string;
	photoURL: string;
	uid: string;
	nickname?: string;
	profile?: string;
}

export type AuthState = {
	user: UserType | undefined | null;
}

export type UsersState = { [id: string]: UserType }