import api, { UpdateTaskRequest } from "@features/api"
import { createForm } from "@features/form"
import { Projects } from "@features/project"
import { createMutation, createQuery } from "@features/query"
import { Field, Heading, IconButton, Loading, Title } from "@features/ui"
import { useNavigate, useParams } from "solid-app-router"
import { Component, createEffect, createResource, createSignal, For, Show } from "solid-js"

const Home: Component = () => {
	let taskFieldRef!: HTMLInputElement
	const params = useParams<{ id: string }>()
	const projectId = () => params.id
	const [project, { refetch: refetchProject }] = createResource(projectId, (id) =>
		api.getProject(id)
	)
	const getProjectsQuery = createQuery(api.getProjects)
	const [isCreatingTask, setIsCreatingTask] = createSignal(false)
	const taskForm = createForm({ defaultValues: { title: "" } })
	const createTaskMutation = createMutation(api.createTask, {
		onSuccess: () => {
			setIsCreatingTask(false)
			refetchProject()
			taskForm.reset()
		},
	})
	const navigate = useNavigate()
	const deleteProjectMutation = createMutation(api.deleteProject, {
		onSuccess: () => {
			getProjectsQuery.refetch()
			navigate("/home")
		},
	})
	const deleteTaskMutation = createMutation(api.deleteTask, {
		onSuccess: () => refetchProject(),
	})
	const updateTaskMutation = createMutation<UpdateTaskRequest>(
		(data) => api.updateTask(projectId(), data),
		{
			onSuccess: () => refetchProject(),
		}
	)
	createEffect(() => {
		if (isCreatingTask()) taskFieldRef.focus()
	})

	return (
		<div>
			<div class="flex gap-40">
				<Projects />

				<div class="space-y-14 max-w-md grow">
					<div class="space-y-2">
						<div class="flex items-center justify-between">
							<Title>Project</Title>
							<IconButton onClick={() => deleteProjectMutation.mutate(projectId())}>
								<i class="bi bi-x-square" />
							</IconButton>
						</div>
						<Heading as="h2">{project()?.data.info.name}</Heading>
					</div>
					<div class="space-y-6">
						<div class="flex items-center justify-between">
							<Title>Tasks</Title>
							<IconButton onClick={() => setIsCreatingTask(true)}>
								<i class="bi bi-plus-square" />
							</IconButton>
						</div>
						<Show when={isCreatingTask()}>
							<form
								class="flex gap-4 items-center"
								onSubmit={taskForm.handleSubmit((values) =>
									createTaskMutation.mutate({
										title: values.title,
										projectId: projectId(),
									})
								)}
							>
								<Field
									control={taskForm.control}
									name="title"
									ref={taskFieldRef}
									required
								/>
								<div class="flex gap-2">
									<IconButton onClick={() => setIsCreatingTask(false)}>
										<i class="bi bi-x-square" />
									</IconButton>
									<IconButton type="submit">
										<i class="bi bi-check-square" />
									</IconButton>
								</div>
							</form>
						</Show>
						<div class="space-y-8 text-lg">
							<For each={project()?.data.items} fallback={<Loading />}>
								{(item) => (
									<div class="flex items-center justify-between">
										<p classList={{ "line-through": item.isDone }}>
											{item.title}
										</p>
										<div class="flex items-center gap-1">
											<IconButton
												onClick={() => deleteTaskMutation.mutate(item.id)}
											>
												<i class="bi bi-x-square" />
											</IconButton>
											<IconButton
												onClick={() =>
													updateTaskMutation.mutate({
														isDone: !item.isDone,
													})
												}
											>
												<i class="bi bi-check-square" />
											</IconButton>
										</div>
									</div>
								)}
							</For>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
