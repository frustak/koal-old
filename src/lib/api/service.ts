import { request } from './request';

export interface AuthPayload {
	email: string;
	password: string;
}

interface AuthData {
	token: string;
}

async function signUp(values: AuthPayload): Promise<AuthData> {
	return await request.post('auth/register', { json: values }).json();
}

async function signIn(values: AuthPayload): Promise<AuthData> {
	return await request.post('auth/login', { json: values }).json();
}

export default {
	signUp,
	signIn
};
