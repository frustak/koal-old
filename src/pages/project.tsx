import api, { UpdateTaskRequest } from "@features/api"
import { createForm } from "@features/form"
import { createMutation } from "@features/query"
import { Sidebar } from "@features/sidebar"
import { TaskList } from "@features/task"
import { Field, Heading, IconButton, Title } from "@features/ui"
import { useNavigate, useParams } from "solid-app-router"
import { Component, createEffect, createResource, createSignal, Show } from "solid-js"

const Home: Component = () => {
	let taskFieldRef!: HTMLInputElement
	const params = useParams<{ id: string }>()
	const navigate = useNavigate()
	const projectId = () => params.id
	const [getProjectResponse, { refetch: refetchGetProject }] = createResource(projectId, (id) =>
		api.getProject(id)
	)
	const [isCreatingTask, setIsCreatingTask] = createSignal(false)
	const taskForm = createForm({ defaultValues: { title: "" } })
	const createTaskMutation = createMutation(api.createTask, {
		onSuccess: () => {
			setIsCreatingTask(false)
			refetchGetProject()
			taskForm.reset()
		},
	})
	const deleteProjectMutation = createMutation(api.deleteProject, {
		onSuccess: () => {
			refetchGetProject()
			navigate("/home")
		},
	})
	const deleteTaskMutation = createMutation(api.deleteTask, {
		onSuccess: () => refetchGetProject(),
	})
	const updateTaskMutation = createMutation<{ id: string; data: UpdateTaskRequest }>(
		({ id, data }) => api.updateTask(id, data),
		{ onSuccess: () => refetchGetProject() }
	)
	createEffect(() => {
		if (isCreatingTask()) taskFieldRef.focus()
	})
	const tasks = () => getProjectResponse()?.data.items
	const handleDeleteTask = (id: string) => deleteTaskMutation.mutate(id)
	const handleCheckTask = (id: string) =>
		updateTaskMutation.mutate({ id, data: { isDone: true } })
	const handleUncheckTask = (id: string) =>
		updateTaskMutation.mutate({ id, data: { isDone: false } })

	return (
		<div>
			<div class="flex gap-40">
				<Sidebar />

				<div class="space-y-14 max-w-md grow">
					<div class="space-y-2">
						<div class="flex items-center justify-between">
							<Title>Project</Title>
							<IconButton
								icon="bi-x-square"
								onClick={() => deleteProjectMutation.mutate(projectId())}
							/>
						</div>
						<Heading as="h2">{getProjectResponse()?.data.info.name}</Heading>
					</div>
					<div class="space-y-2">
						<div class="flex items-center justify-between">
							<Title>Tasks</Title>
							<IconButton
								icon="bi-plus-square"
								onClick={() => setIsCreatingTask(true)}
							/>
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
									<IconButton
										icon="bi-x-square"
										onClick={() => setIsCreatingTask(false)}
									/>
									<IconButton icon="bi-check-square" type="submit" />
								</div>
							</form>
						</Show>
						<TaskList
							tasks={tasks()}
							loading={getProjectResponse.loading}
							handleDelete={handleDeleteTask}
							handleCheck={handleCheckTask}
							handleUncheck={handleUncheckTask}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
