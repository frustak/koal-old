<script lang="ts">
	import { persist } from '$lib/stores/persist';

	const tasks = persist<string[]>('tasks', []);
	let newTask = '';

	function addTask() {
		if (!newTask) return;
		$tasks = [...$tasks, newTask];
		newTask = '';
	}

	function removeTask(index: number) {
		$tasks = $tasks.filter((_, i) => i !== index);
	}
</script>

<section class="space-y-4">
	<div class="space-y-3 leading-10">
		{#each $tasks as task, index}
			<div
				class="flex items-center justify-between w-full px-2 text-left transition border-2 rounded outline-none cursor-pointer border-primary/75 focus:bg-primary/5 hover:bg-primary/5 gap-x-4"
			>
				<p>{task}</p>
				<button
					class="flex transition rounded button-icon text-background bg-primary hover:bg-background hover:text-primary"
					on:click={() => removeTask(index)}
				>
					<i class="flex p-1 bi bi-x-lg" />
				</button>
			</div>
		{/each}
	</div>

	<form on:submit|preventDefault={addTask}>
		<input type="text" class="input" bind:value={newTask} />
	</form>
</section>
