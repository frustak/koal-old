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
				class="w-full px-2 text-left border-2 rounded outline-none border-primary/75 focus:bg-primary/5 hover:bg-primary/5"
				on:click={() => removeTask(index)}>{task}</button
			>
		{/each}
	</div>

	<form on:submit|preventDefault={addTask}>
		<input
			type="text"
			class="w-full border-0 border-b rounded-t focus:border-current border-primary/75 focus:ring-0 focus:bg-primary/5 bg-inherit"
			bind:value={newTask}
		/>
	</form>
</section>
