<script>
	import Tasks from '$lib/containers/tasks.svelte';
	import Timer from '$lib/containers/timer.svelte';
</script>

<main>
	<div class="grid grid-cols-4 gap-x-16">
		<div>
			<Timer />
		</div>
		<div class="col-span-3">
			<Tasks />
		</div>
	</div>
</main>
