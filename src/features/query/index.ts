import { ErrorResponse } from "@features/api"
import { AxiosError, AxiosResponse } from "axios"
import { useNavigate } from "solid-app-router"
import { createSignal, onMount } from "solid-js"

interface QueryOptions<Response> {
	onSuccess?: (data: Response) => void
}

export function createQuery<D = unknown, E = ErrorResponse>(
	request: () => Promise<AxiosResponse<D>>,
	options?: QueryOptions<D>
) {
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = createSignal(false)
	const [error, setError] = createSignal<E>()
	const [data, setData] = createSignal<D>()

	const fetch = async () => {
		setIsLoading(true)
		try {
			const response = (await request()).data
			setData(() => response)
			setError(undefined)
			options?.onSuccess?.(response)
		} catch (err) {
			const error = err as AxiosError<E>
			setError(() => error?.response?.data)
			if (error.response?.status === 401) navigate("/login")
		}
		setIsLoading(false)
	}

	onMount(fetch)

	return {
		refetch: fetch,
		data,
		error,
		isLoading,
	}
}

interface MutationOptions<Response> {
	onSuccess?: (data: Response) => void
}

export function createMutation<P = unknown, D = unknown, E = ErrorResponse>(
	request: (data: P) => Promise<AxiosResponse<D>>,
	options?: MutationOptions<D>
) {
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = createSignal(false)
	const [error, setError] = createSignal<E>()
	const [data, setData] = createSignal<D>()

	const mutate = async (data: P) => {
		setIsLoading(true)
		try {
			const response = (await request(data)).data
			setData(() => response)
			setError(undefined)
			options?.onSuccess?.(response)
		} catch (err) {
			const error = err as AxiosError<E>
			setError(() => error?.response?.data)
			if (error.response?.status === 401) navigate("/login")
		}
		setIsLoading(false)
	}

	return {
		mutate,
		data,
		error,
		isLoading,
	}
}
