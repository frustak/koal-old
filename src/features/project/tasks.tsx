import api, { TodoItem, UpdateTaskRequest } from "@features/api"
import { createMutation } from "@features/query"
import { CreateTaskForm, TaskList } from "@features/task"
import { IconButton, Title } from "@features/ui"
import { Component, createSignal, Show } from "solid-js"

export const ProjectTasks: Component<{
	projectId: string
	tasks?: TodoItem[]
	refetch: () => void
	loading: boolean
}> = (props) => {
	const projectId = () => props.projectId
	const [isCreatingTask, setIsCreatingTask] = createSignal(false)
	const deleteTaskMutation = createMutation(api.deleteTask, {
		onSuccess: () => props.refetch(),
	})
	const updateTaskMutation = createMutation<{ id: string; data: UpdateTaskRequest }>(
		({ id, data }) => api.updateTask(id, data),
		{ onSuccess: () => props.refetch() }
	)
	const handleDeleteTask = (id: string) => deleteTaskMutation.mutate(id)
	const handleCheckTask = (id: string) =>
		updateTaskMutation.mutate({ id, data: { isDone: true } })
	const handleUncheckTask = (id: string) =>
		updateTaskMutation.mutate({ id, data: { isDone: false } })

	return (
		<div class="space-y-2">
			<div class="flex items-center justify-between">
				<Title>Tasks</Title>
				<IconButton icon="bi-plus-square" onClick={() => setIsCreatingTask(true)} />
			</div>
			<Show when={isCreatingTask()}>
				<CreateTaskForm
					projectId={projectId()}
					onSuccess={() => {
						setIsCreatingTask(false)
						props.refetch()
					}}
					onClickClose={() => setIsCreatingTask(false)}
				/>
			</Show>
			<TaskList
				tasks={props.tasks}
				loading={props.loading}
				handleDelete={handleDeleteTask}
				handleCheck={handleCheckTask}
				handleUncheck={handleUncheckTask}
			/>
		</div>
	)
}
