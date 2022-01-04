<script lang="ts">
	import { onMount } from 'svelte';

	let tasks: string[] = [];
	let newTask = '';

	onMount(() => {
		const saved = localStorage.getItem('tasks');
		if (saved) tasks = JSON.parse(saved);
	});

	function addTask() {
		if (!newTask) return;
		tasks = [...tasks, newTask];
		newTask = '';
		saveTasksToStorage();
	}

	function removeTask(index: number) {
		tasks = tasks.filter((_, i) => i !== index);
		saveTasksToStorage();
	}

	function saveTasksToStorage() {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
</script>

<section class="space-y-4">
	<div class="space-y-3 leading-10">
		{#each tasks as task, index}
			<div>
				<button
					class="w-full px-2 text-left border-2 rounded outline-none border-stone-500 focus:bg-stone-200 hover:bg-stone-200 dark:focus:bg-stone-600 dark:hover:bg-stone-600"
					on:click={() => removeTask(index)}>{task}</button
				>
			</div>
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
