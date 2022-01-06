import { browser } from '$app/env';
import { writable } from 'svelte/store';

interface Options<T> {
	parse: (str: string) => T;
	stringify: (value: T) => string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function persist<T>(
	key: string,
	value?: T | undefined,
	options: Options<T> = { parse: JSON.parse, stringify: JSON.stringify }
) {
	let defaultValue = value;
	if (browser) {
		const saved = localStorage.getItem(key);
		if (saved) defaultValue = options.parse(saved);
	}

	const store = writable<T>(defaultValue);

	store.subscribe((value) => {
		if (browser) localStorage.setItem(key, options.stringify(value));
	});

	return store;
}
