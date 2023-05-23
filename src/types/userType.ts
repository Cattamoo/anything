export interface UserType {
	displayName: string;
	email: string;
	photoURL: string;
	uid: string;
}

export type UserState = {
	user: UserType | undefined | null;
}