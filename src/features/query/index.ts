import { ErrorResponse } from "@features/api"
import { AxiosError, AxiosResponse } from "axios"
import { useNavigate } from "solid-app-router"
import { createSignal } from "solid-js"

interface Options<Response> {
	onSuccess: (data: Response) => void
}

export function createMutation<P = unknown, D = unknown, E = ErrorResponse>(
	request: (data: P) => Promise<AxiosResponse<D>>,
	options?: Options<D>
) {
	const [isLoading, setIsLoading] = createSignal(false)
	const [error, setError] = createSignal<E>()
	const [data, setData] = createSignal<D>()
	const navigate = useNavigate()

	const mutate = async (data: P) => {
		setIsLoading(true)
		try {
			const response = (await request(data)).data
			setData(() => response)
			setError(undefined)
			options?.onSuccess(response)
		} catch (err) {
			const error = err as AxiosError
			setError(() => error?.response?.data)
			if (error.code === "401") navigate("/login")
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
