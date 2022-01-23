import { goto } from '$app/navigation';
import type { AuthData } from '$lib/api/schemas';
import Cookies from 'js-cookie';

export function onAuthSuccess(data: AuthData): void {
	Cookies.set('token', data.token);
	goto('/');
}
