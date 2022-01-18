<script lang="ts">
	import { DEFAULT_DURATION } from '$lib/stores/timer';
	import { getDisplayTime } from '$lib/utils/display';
	import { persist } from '$lib/utils/persist';

	interface Task {
		description: string;
		remained: number;
	}

	const tasks = persist<Task[]>('tasks', []);
	let newTask = '';
	let selectedTask: number | null = null;

	function addTask() {
		if (!newTask.trim()) return;
		const task: Task = {
			description: newTask,
			remained: DEFAULT_DURATION,
		};
		$tasks = [...$tasks, task];
		newTask = '';
	}

	function removeTask(index: number) {
		$tasks = $tasks.filter((_, i) => i !== index);
	}

	function selectTask(index: number) {
		if (selectedTask === index) selectedTask = null;
		else selectedTask = index;
	}
</script>

<section class="space-y-4">
	<div class="space-y-3 leading-10">
		{#each $tasks as task, index}
			<button
				class="flex items-center justify-between w-full px-2 text-left bg-opacity-0 border-2 rounded outline-none cursor-pointer border-primary/75 bg-primary gap-x-4 hover:border-primary"
				class:bg-opacity-10={selectedTask === index}
				on:click={() => selectTask(index)}
			>
				<p>
					<span class="rounded bg-primary text-background px-1 text-xs font-black">
						{getDisplayTime(task.remained)}
					</span>
					<span>{task.description}</span>
				</p>
				<button
					class="flex rounded button-icon text-background bg-primary hover:bg-background hover:text-primary"
					on:click={() => removeTask(index)}
				>
					<i class="flex p-1 bi bi-x-lg" />
				</button>
			</button>
		{/each}
	</div>

	<form on:submit|preventDefault={addTask}>
		<input type="text" class="input" bind:value={newTask} />
	</form>
</section>
