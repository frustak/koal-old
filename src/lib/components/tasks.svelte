<script lang="ts">
	import { onMount } from 'svelte';

	let tasks: string[] = [];
	let newTask = '';

	onMount(() => {
		tasks = JSON.parse(localStorage.getItem('tasks'));
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
					class="w-full text-left bg-stone-50 focus:bg-stone-100 hover:bg-stone-100 outline-none rounded px-2"
					on:click={() => removeTask(index)}>{task}</button
				>
			</div>
		{/each}
	</div>

	<form on:submit|preventDefault={addTask}>
		<input
			type="text"
			class="focus:border-stone-500 border-0 border-b focus:ring-0 focus:bg-stone-50 rounded-t w-full"
			bind:value={newTask}
		/>
	</form>
</section>
