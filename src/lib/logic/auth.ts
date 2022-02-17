import { goto } from '$app/navigation';
import type { AuthData } from '$lib/api/schemas';
import { Cookie } from '$lib/constants/cookie';
import { user } from '$lib/stores/user';
import Cookies from 'js-cookie';

export function onAuthSuccess(data: AuthData): void {
	user.set({ token: data.token });
	Cookies.set(Cookie.Token, data.token);
	goto('/');
}

export function signOut(): void {
	user.set(null);
	Cookies.remove(Cookie.Token);
	goto('/');
}
