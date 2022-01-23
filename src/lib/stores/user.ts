import { writable } from 'svelte/store';

interface UserData {
	token: string;
}

export const user = writable<UserData | null>(null);
