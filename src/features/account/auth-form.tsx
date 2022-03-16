import { Button, Field, Heading, Title } from "@features/ui"
import { Component, JSX } from "solid-js"

interface AuthFormProps {
	title: string
	subtitle: JSX.Element
	submitText: string
}

export const AuthForm: Component<AuthFormProps> = (props) => {
	return (
		<form class="flex flex-col gap-6 max-w-xs grow mt-28 mx-auto">
			<div class="flex justify-between items-center">
				<Heading as="h2">{props.title}</Heading>
				<Title>{props.subtitle}</Title>
			</div>
			<Field type="email" label="Email" />
			<Field type="password" label="Password" />
			<Button>{props.submitText}</Button>
		</form>
	)
}
