<script lang="ts">
	import { timer } from '$lib/stores/timer';
	import { getDisplayTime } from '$lib/utils/display';
	import { persist } from '$lib/utils/persist';

	interface Task {
		description: string;
		spentTime: number;
	}

	const tasks = persist<Task[]>('tasks', []);
	let newTask = '';
	let selectedTaskIndex: number | null = null;

	timer.subscribe(() => {
		if (selectedTaskIndex !== null) {
			$tasks[selectedTaskIndex].spentTime += 1;
		}
	});

	function addTask() {
		if (!newTask.trim()) return;
		const task: Task = {
			description: newTask,
			spentTime: 0,
		};
		$tasks = [...$tasks, task];
		newTask = '';
	}

	function removeTask(index: number) {
		if (selectedTaskIndex === index) selectedTaskIndex = null;
		$tasks = $tasks.filter((_, i) => i !== index);
	}

	function selectTask(index: number) {
		if (selectedTaskIndex === index) {
			selectedTaskIndex = null;
			return;
		}
		selectedTaskIndex = index;
	}

	$: console.log(selectedTaskIndex);
</script>

<section class="space-y-4">
	<div class="space-y-3 leading-10">
		{#each $tasks as task, index}
			<button
				class="flex items-center justify-between w-full px-2 text-left bg-opacity-0 border-2 rounded outline-none cursor-pointer border-primary/75 bg-primary gap-x-4 hover:border-primary"
				class:bg-opacity-10={selectedTaskIndex === index}
				on:click={() => selectTask(index)}
			>
				<div class="flex items-center gap-x-2">
					<span class="rounded bg-primary text-background px-1 text-xs font-black font-mono">
						{getDisplayTime(task.spentTime)}
					</span>
					<p>{task.description}</p>
				</div>
				<button
					class="flex rounded button-icon text-background bg-primary hover:bg-background hover:text-primary border border-primary"
					on:click|stopPropagation={() => removeTask(index)}
				>
					<i class="flex p-0.5 bi bi-x-lg" />
				</button>
			</button>
		{/each}
	</div>

	<form on:submit|preventDefault={addTask}>
		<input type="text" class="input" bind:value={newTask} />
	</form>
</section>
