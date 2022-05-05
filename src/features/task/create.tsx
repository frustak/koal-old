import api from "@features/api"
import { createForm } from "@features/form"
import { createMutation } from "@features/query"
import { Field, IconButton } from "@features/ui"
import { Component, createEffect } from "solid-js"

export const CreateTaskForm: Component<{
	projectId: string
	onSuccess: () => void
	onClickClose: () => void
}> = (props) => {
	const form = createForm({ defaultValues: { title: "" } })
	const createTaskMutation = createMutation(api.createTask, {
		onSuccess: () => {
			form.reset()
			props.onSuccess()
		},
	})
	let titleFieldRef!: HTMLInputElement
	createEffect(() => titleFieldRef.focus())

	return (
		<form
			class="flex gap-4 items-center"
			onSubmit={form.handleSubmit((values) =>
				createTaskMutation.mutate({
					title: values.title,
					projectId: props.projectId,
				})
			)}
		>
			<Field control={form.control} name="title" required ref={titleFieldRef} />
			<div class="flex gap-2">
				<IconButton icon="bi-x-square" onClick={() => props.onClickClose()} />
				<IconButton icon="bi-check-square" type="submit" />
			</div>
		</form>
	)
}
