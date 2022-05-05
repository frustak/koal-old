import api from "@features/api"
import { createMutation } from "@features/query"
import { Heading, IconButton, Title } from "@features/ui"
import { useNavigate } from "solid-app-router"
import { Component } from "solid-js"

export const ProjectDetail: Component<{ name?: string; id: string }> = (props) => {
	const navigate = useNavigate()
	const deleteProjectMutation = createMutation(api.deleteProject, {
		onSuccess: () => navigate("/home"),
	})

	return (
		<div class="space-y-2">
			<div class="flex items-center justify-between">
				<Title>Project</Title>
				<IconButton
					icon="bi-x-square"
					onClick={() => deleteProjectMutation.mutate(props.id)}
				/>
			</div>
			<Heading as="h2">{props.name}</Heading>
		</div>
	)
}
