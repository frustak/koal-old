<script lang="ts">
	import { persist } from '$lib/stores/persist';

	interface Task {
		description: string;
	}

	const tasks = persist<Task[]>('tasks', []);
	let newTask = '';
	let selectedTask: number | null = null;

	function addTask() {
		if (!newTask.trim()) return;
		$tasks = [...$tasks, { description: newTask }];
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
				<p>{task.description}</p>
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
