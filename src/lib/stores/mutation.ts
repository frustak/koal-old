import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

// D: Data, P: Payload, E: Error

interface Query<D, E> {
	data: D | null;
	error: E | null;
	isSubmitting: boolean;
	isError: boolean;
}

type Mutate<D, P> = (payload: P) => Promise<D>;

interface Mutation<D, P, E> {
	store: Writable<Query<D, E>>;
	mutate: (payload: P) => Promise<void>;
}

interface Options<D> {
	onSuccess: (data: D) => void;
}

export function mutation<D, P, E = unknown>(
	callback: Mutate<D, P>,
	options?: Options<D>
): Mutation<D, P, E> {
	const store = writable<Query<D, E>>({
		data: null,
		error: null,
		isSubmitting: false,
		isError: false
	});

	const mutate = async (payload: P) => {
		try {
			store.update((prev) => ({ ...prev, isSubmitting: true }));
			const data = await callback(payload);
			options?.onSuccess(data);
			store.update((prev) => ({ ...prev, data, error: null, isError: false }));
		} catch (error) {
			store.update((prev) => ({ ...prev, data: null, error: error, isError: true }));
		} finally {
			store.update((prev) => ({ ...prev, isSubmitting: false }));
		}
	};

	return {
		store,
		mutate
	};
}
