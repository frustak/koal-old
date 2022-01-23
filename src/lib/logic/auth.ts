import { goto } from '$app/navigation';
import type { AuthData } from '$lib/api/schemas';
import { user } from '$lib/stores/user';
import Cookies from 'js-cookie';

export function onAuthSuccess(data: AuthData): void {
	user.set({ token: data.token });
	Cookies.set('token', data.token);
	goto('/');
}
