import api, { Project } from "@features/api"
import { createForm } from "@features/form"
import { createMutation } from "@features/query"
import { Field, Heading, IconButton, Link, Loading, Title } from "@features/ui"
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import { Component, createEffect, createResource, createSignal, For, Show } from "solid-js"

export const Sidebar: Component = () => {
	let projectFieldRef!: HTMLInputElement
	const [isCreatingProject, setIsCreatingProject] = createSignal(false)
	const projectForm = createForm({ defaultValues: { name: "" } })
	const [getProjectsResponse, { refetch: refetchGetProjects }] = createResource(api.getProjects)
	const createProjectMutation = createMutation(api.createProject, {
		onSuccess: () => {
			setIsCreatingProject(false)
			refetchGetProjects()
			projectForm.reset()
		},
	})
	const token = Cookies.get("token")
	const email = () => (token ? jwtDecode<{ sub: string }>(token).sub : null)

	createEffect(() => {
		if (isCreatingProject()) projectFieldRef.focus()
	})

	return (
		<div class="max-w-xs grow shrink-0 space-y-14">
			<div class="space-y-2">
				<Title>
					<Link href="/profile">{email()}</Link>
				</Title>
				<Heading>
					<Link href="/home">Home</Link>
				</Heading>
			</div>
			<div class="space-y-3">
				<div class="flex items-center justify-between">
					<Title>Projects</Title>
					<IconButton icon="bi-plus-square" onClick={() => setIsCreatingProject(true)} />
				</div>
				<div class="space-y-3 text-lg">
					<Show when={isCreatingProject()}>
						<form
							class="flex gap-4 items-center"
							onSubmit={projectForm.handleSubmit(createProjectMutation.mutate)}
						>
							<Field
								control={projectForm.control}
								name="name"
								ref={projectFieldRef}
								required
							/>
							<div class="flex gap-1">
								<IconButton
									icon="bi-x-square"
									onClick={() => setIsCreatingProject(false)}
								/>
								<IconButton icon="bi-check-square" type="submit" />
							</div>
						</form>
					</Show>
					<Projects
						projects={getProjectsResponse()?.data.projects}
						loading={getProjectsResponse.loading}
					/>
				</div>
			</div>
		</div>
	)
}

interface ProjectsProps {
	projects?: Project[]
	loading: boolean
}
const Projects: Component<ProjectsProps> = (props) => {
	return (
		<Show when={!props.loading} fallback={<Loading />}>
			<For each={props.projects} fallback={<div>No item…</div>}>
				{(project) => (
					<p>
						<Link href={`/projects/${project.id}`}>{project.name}</Link>
					</p>
				)}
			</For>
		</Show>
	)
}
