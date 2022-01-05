import { writable } from 'svelte/store';

export enum Theme {
	Light = 'light',
	Dark = 'dark'
}

export const theme = writable<Theme>(Theme.Light);

export function changeTheme(which: Theme): void {
	theme.set(which);
	localStorage.setItem('theme', which);
}
