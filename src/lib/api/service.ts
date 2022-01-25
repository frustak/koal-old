import { request } from './request';
import type { AuthData, AuthPayload } from './schemas';

function signUp(values: AuthPayload): Promise<AuthData> {
	return request.post('auth/register', { json: values }).json();
}

function signIn(values: AuthPayload): Promise<AuthData> {
	return request.post('auth/login', { json: values }).json();
}

export default {
	signUp,
	signIn,
};
