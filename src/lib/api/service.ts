import { request } from './request';

export interface AuthPayload {
	email: string;
	password: string;
}

async function signUp(values: AuthPayload): Promise<void> {
	await request.post('auth/register', {
		json: {
			username: values.email,
			password: values.password
		}
	});
}

async function signIn(values: AuthPayload): Promise<void> {
	await request.post('auth/login', {
		json: {
			username: values.email,
			password: values.password
		}
	});
}

export default {
	signUp,
	signIn
};
