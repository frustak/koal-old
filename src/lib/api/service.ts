import { request } from './request';

export interface SignUpPayload {
	email: string;
	password: string;
}

async function signUp(values: SignUpPayload): Promise<void> {
	await request.post('auth/register', {
		json: {
			username: values.email,
			password: values.password
		}
	});
}

export default {
	signUp
};
