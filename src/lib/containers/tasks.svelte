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
			<button
				class="w-full px-2 text-left border-2 rounded outline-none border-stone-500 focus:bg-stone-200 hover:bg-stone-200 dark:focus:bg-stone-600 dark:hover:bg-stone-600"
				on:click={() => removeTask(index)}>{task}</button
			>
		{/each}
	</div>

	<form on:submit|preventDefault={addTask}>
		<input
			type="text"
			class="w-full border-0 border-b rounded-t focus:border-current border-stone-500 focus:ring-0 focus:bg-stone-100 bg-inherit dark:border-stone-400 dark:focus:bg-stone-600"
			bind:value={newTask}
		/>
	</form>
</section>
