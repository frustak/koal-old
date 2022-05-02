import { IconButton } from "@features/ui"
import { Component, Show } from "solid-js"

export interface TaskData {
	id: string
	title: string
	isDone: boolean
}

interface TaskProps extends TaskData {
	handleDelete: () => void
	handleCheck: () => void
	handleUncheck: () => void
}
export const Task: Component<TaskProps> = (props) => {
	return (
		<div class="flex items-center justify-between">
			<p classList={{ "line-through": props.isDone }}>{props.title}</p>
			<div class="flex items-center gap-2 text-base">
				<IconButton icon="bi bi-x-square" onClick={() => props.handleDelete()} />
				<Show
					when={props.isDone}
					fallback={
						<IconButton icon="bi bi-square" onClick={() => props.handleCheck()} />
					}
				>
					<IconButton icon="bi bi-check-square" onClick={() => props.handleUncheck()} />
				</Show>
			</div>
		</div>
	)
}
