import { Cookie } from '$lib/constants/cookie';
import Cookies from 'js-cookie';
import type { BeforeRequestHook } from 'ky';
import ky from 'ky';

const API_URL = import.meta.env.VITE_API_URL;

const addAuthorizationHeader: BeforeRequestHook = (request) => {
	const token = Cookies.get(Cookie.Token);
	if (token) request.headers.set('Authorization', `Bearer ${token}`);
};

export const request = ky.create({
	prefixUrl: API_URL,
	hooks: {
		beforeRequest: [addAuthorizationHeader],
	},
});
