<script lang="ts">
	import Field from '$lib/components/field.svelte';

	interface Task {
		title: string;
	}

	let tasks: Task[] = [];
	let newTask = '';

	function addTask() {
		if (!newTask.trim()) return;
		const task: Task = { title: newTask };
		tasks = [...tasks, task];
		newTask = '';
	}

	function removeTask(index: number) {
		tasks = tasks.filter((_, i) => i !== index);
	}
</script>

<section class="space-y-4">
	<div class="space-y-3 leading-10">
		{#each tasks as task, index}
			<div
				class="flex items-center justify-between w-full px-2 text-left bg-opacity-0 border-2  outline-none border-primary/75 bg-primary gap-x-4"
			>
				<p>{task.title}</p>
				<button
					class="flex border text-background bg-primary hover:bg-background hover:text-primary border-primary"
					on:click|stopPropagation={() => removeTask(index)}
				>
					<i class="flex p-0.5 bi bi-x-lg" />
				</button>
			</div>
		{/each}
	</div>

	<form on:submit|preventDefault={addTask}>
		<Field label="New task" name="todo" type="text" bind:value={newTask} />
	</form>
</section>
