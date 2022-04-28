import api from "@features/api"
import { createForm } from "@features/form"
import { Projects } from "@features/project"
import { createQuery } from "@features/query"
import { Field, IconButton, Loading, Title } from "@features/ui"
import { Component, createEffect, createSignal, For, Show } from "solid-js"

const Home: Component = () => {
	let taskFieldRef!: HTMLInputElement
	const [isCreatingTask, setIsCreatingTask] = createSignal(false)
	const taskForm = createForm({ defaultValues: { title: "" } })
	const getTasksQuery = createQuery(api.getTasks)
	createEffect(() => {
		if (isCreatingTask()) taskFieldRef.focus()
	})

	return (
		<div>
			<div class="flex">
				<Projects />

				<div class="space-y-14 ml-40 max-w-md grow">
					{/* <div class="space-y-2">
						<div class="flex items-center justify-between">
							<Title>Project</Title>
							<i class="bi bi-x-square" />
						</div>
						<Heading as="h2">Work</Heading>
					</div> */}
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
								onSubmit={taskForm.handleSubmit(() => null)}
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
							<For each={getTasksQuery.data()?.items} fallback={<Loading />}>
								{(item) => (
									<div class="flex items-center justify-between">
										<p class="line-through">{item.title}</p>
										<div class="flex items-center gap-2 text-base">
											<i class="bi bi-x-square" />
											<i class="bi bi-check-square" />
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
