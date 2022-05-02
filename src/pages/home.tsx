import api, { UpdateTaskRequest } from "@features/api"
import { createMutation } from "@features/query"
import { Sidebar } from "@features/sidebar"
import { TaskList } from "@features/task"
import { Title } from "@features/ui"
import { Component, createResource } from "solid-js"

const HomePage: Component = () => {
	const [getTasksResponse, { refetch: refetchTasks }] = createResource(api.getTasks)
	const tasks = () => getTasksResponse()?.data.items
	const deleteTaskRequest = createMutation(api.deleteTask, { onSuccess: refetchTasks })
	const updateTaskRequest = createMutation(
		({ id, data }: { id: string; data: UpdateTaskRequest }) => api.updateTask(id, data),
		{ onSuccess: refetchTasks }
	)
	const handleDeleteTask = (id: string) => deleteTaskRequest.mutate(id)
	const handleCheckTask = (id: string) => updateTaskRequest.mutate({ id, data: { isDone: true } })
	const handleUncheckTask = (id: string) =>
		updateTaskRequest.mutate({ id, data: { isDone: false } })

	return (
		<div class="flex">
			<Sidebar />
			<div class="ml-40 max-w-md grow space-y-2">
				<Title>Tasks</Title>
				<TaskList
					tasks={tasks()}
					loading={getTasksResponse.loading}
					handleDelete={handleDeleteTask}
					handleCheck={handleCheckTask}
					handleUncheck={handleUncheckTask}
				/>
			</div>
		</div>
	)
}

export default HomePage
