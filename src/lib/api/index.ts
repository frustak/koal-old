import Cookies from 'js-cookie';
import ky from 'ky';

const API_URL = import.meta.env.VITE_API_URL;

function addAuthorizationHeader(request: Request) {
	const token = Cookies.get('token');
	if (token) request.headers.set('Authorization', `Bearer ${token}`);
}

export const api = ky.create({
	prefixUrl: API_URL,
	hooks: { beforeRequest: [addAuthorizationHeader] }
});
