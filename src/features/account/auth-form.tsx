import { createForm } from "@features/form"
import { Button, ErrorMessage, Field, Heading, Title } from "@features/ui"
import { Component, JSX } from "solid-js"
import { z } from "zod"

interface AuthFormValues {
	email: string
	password: string
}

interface AuthFormProps {
	title: string
	subtitle: JSX.Element
	submitText: string
	onSubmit: (values: AuthFormValues) => void
	isLoading: boolean
	error?: string
}

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
})

export const AuthForm: Component<AuthFormProps> = (props) => {
	const form = createForm({
		defaultValues: { email: "", password: "" },
		schema,
	})

	return (
		<form
			class="flex flex-col gap-6 max-w-xs grow mt-28 mx-auto"
			onSubmit={form.handleSubmit((values) => props.onSubmit(values))}
		>
			<div class="flex justify-between items-center">
				<Heading as="h2">{props.title}</Heading>
				<Title>{props.subtitle}</Title>
			</div>
			<Field type="email" label="Email" name="email" control={form.control} />
			<Field type="password" label="Password" name="password" control={form.control} />
			<Button type="submit" isLoading={props.isLoading}>
				{props.submitText}
			</Button>
			<ErrorMessage>{props.error}</ErrorMessage>
		</form>
	)
}
