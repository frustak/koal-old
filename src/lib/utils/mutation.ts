import type { ApiError } from '$lib/api/schemas';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

// D: Data, P: Payload, E: Error

interface Query<D, E> {
	data: D | null;
	error: E | null;
	isLoading: boolean;
	isError: boolean;
	isSuccess: boolean;
	isRecentError: boolean;
	isRecentSuccess: boolean;
}

type Mutate<D, P> = (payload: P) => Promise<D>;

interface Mutation<D, P, E> {
	store: Writable<Query<D, E>>;
	mutate: (payload: P) => Promise<void>;
}

interface Options<D, E> {
	onSuccess?: (data: D) => void;
	onError?: (error: E) => void;
}

export function mutation<D, P, E = ApiError>(
	service: Mutate<D, P>,
	options?: Options<D, E>,
): Mutation<D, P, E> {
	const store = writable<Query<D, E>>({
		data: null,
		error: null,
		isLoading: false,
		isError: false,
		isSuccess: false,
		isRecentError: false,
		isRecentSuccess: false,
	});

	const mutate = async (payload: P) => {
		store.update((prev) => ({ ...prev, isLoading: true }));
		try {
			const successData = await service(payload);
			handleSuccess<D, E>(store, successData, options);
		} catch (error) {
			const errorData = await parseError(error as WithResponse);
			handleError<D, E>(store, errorData as E, options);
		}
	};

	return {
		store,
		mutate,
	};
}

function handleSuccess<D, E = unknown>(
	store: Writable<Query<D, E>>,
	data: D,
	options?: Options<D, E>,
) {
	options?.onSuccess?.(data);
	store.update((prev) => ({
		...prev,
		data,
		error: null,
		isError: false,
		isSuccess: true,
		isLoading: false,
		isRecentError: false,
		isRecentSuccess: true,
	}));

	setTimeout(() => {
		store.update((prev) => ({ ...prev, isRecentSuccess: false }));
	}, 1000);
}

function handleError<D, E = unknown>(
	store: Writable<Query<D, E>>,
	error: E,
	options?: Options<D, E>,
) {
	options?.onError?.(error);
	store.update((prev) => ({
		...prev,
		data: null,
		error,
		isError: true,
		isSuccess: false,
		isLoading: false,
		isRecentError: true,
		isRecentSuccess: false,
	}));

	setTimeout(() => {
		store.update((prev) => ({ ...prev, isRecentError: false }));
	}, 1000);
}

function parseError<E extends WithResponse>(error: E) {
	return error.response.json();
}

interface WithResponse {
	response: Response;
}
