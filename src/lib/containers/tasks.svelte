<script lang="ts">
	import { onMount } from 'svelte';

	let tasks: string[] = [];
	let newTask = '';

	onMount(() => {
		const saved = localStorage.getItem('tasks');
		if (saved) JSON.parse(saved);
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
					class="w-full text-left border-2 border-stone-500 focus:bg-stone-200 hover:bg-stone-200 outline-none rounded px-2"
					on:click={() => removeTask(index)}>{task}</button
				>
			</div>
		{/each}
	</div>

	<form on:submit|preventDefault={addTask}>
		<input
			type="text"
			class="focus:border-stone-500 border-0 border-b focus:ring-0 focus:bg-stone-100 rounded-t w-full bg-stone-50"
			bind:value={newTask}
		/>
	</form>
</section>
