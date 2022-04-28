import api from "@features/api"
import { createForm } from "@features/form"
import { createMutation, createQuery } from "@features/query"
import { Field, Heading, IconButton, Link, Loading, Title } from "@features/ui"
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import { Component, createEffect, createSignal, For, Show } from "solid-js"

export const Projects: Component = () => {
	let projectFieldRef!: HTMLInputElement
	const [isCreatingProject, setIsCreatingProject] = createSignal(false)
	const projectForm = createForm({ defaultValues: { name: "" } })
	const getProjectsQuery = createQuery(api.getProjects)
	const createProjectMutation = createMutation(api.createProject, {
		onSuccess: () => {
			setIsCreatingProject(false)
			getProjectsQuery.refetch()
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
					<IconButton onClick={() => setIsCreatingProject(true)}>
						<i class="bi bi-plus-square" />
					</IconButton>
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
								<IconButton onClick={() => setIsCreatingProject(false)}>
									<i class="bi bi-x-square" />
								</IconButton>
								<IconButton type="submit">
									<i class="bi bi-check-square" />
								</IconButton>
							</div>
						</form>
					</Show>
					<For each={getProjectsQuery.data()?.projects} fallback={<Loading />}>
						{(project) => (
							<p>
								<Link href={`/projects/${project.id}`}>{project.name}</Link>
							</p>
						)}
					</For>
				</div>
			</div>
		</div>
	)
}
