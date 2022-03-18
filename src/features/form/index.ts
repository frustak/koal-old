import { Accessor, createEffect, createSignal, Signal } from "solid-js"
import { ZodIssue, ZodSchema } from "zod"

export function createForm<T extends Record<string, string>>({
	defaultValues,
	schema,
}: {
	defaultValues: T
	schema?: ZodSchema<T>
}) {
	const [state, setState] = createSignal(defaultValues)
	const [errors, setErrors] = createSignal<ZodIssue[]>()
	const [isSubmitted, setIsSubmitted] = createSignal(false)

	createEffect(() => {
		if (schema && isSubmitted()) {
			const result = schema.safeParse(state())
			if (result.success) setErrors(undefined)
			else setErrors(result.error.issues)
		}
	})

	const handleSubmit = (callback: (values: T) => void) => {
		// eslint-disable-next-line solid/reactivity
		return (e: Event) => {
			e.preventDefault()
			setIsSubmitted(true)
			const values = state()
			if (!schema) callback(values)
			else {
				const result = schema.safeParse(values)
				if (result.success) {
					setErrors(undefined)
					callback(values)
				} else setErrors(result.error.issues)
			}
		}
	}

	return {
		control: {
			signal: [state, setState] as Signal<T>,
			errors,
		} as Control<T>,
		handleSubmit,
	}
}

export interface Control<T> {
	signal: Signal<T>
	errors: Accessor<ZodIssue[] | undefined>
}
