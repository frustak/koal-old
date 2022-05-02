import { Loading } from "@features/ui"
import { Component, For, Show } from "solid-js"
import { Task, TaskData } from "./task"

interface TaskListProps {
	tasks?: TaskData[]
	loading: boolean
	handleDelete: (id: string) => void
	handleCheck: (id: string) => void
	handleUncheck: (id: string) => void
}
export const TaskList: Component<TaskListProps> = (props) => {
	return (
		<div class="space-y-4 text-lg">
			<For
				each={props.tasks}
				fallback={
					<Show when={props.tasks?.length === 0} fallback={<Loading />}>
						No item…
					</Show>
				}
			>
				{(task) => (
					<Task
						{...task}
						handleDelete={() => props.handleDelete(task.id)}
						handleCheck={() => props.handleCheck(task.id)}
						handleUncheck={() => props.handleUncheck(task.id)}
					/>
				)}
			</For>
		</div>
	)
}
