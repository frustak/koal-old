export interface AuthPayload {
	email: string;
	password: string;
}

export interface AuthData {
	token: string;
}

export interface ApiError {
	code: number;
	message: string;
	details: unknown[];
}
