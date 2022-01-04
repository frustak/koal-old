<script>
	import Tasks from '$lib/containers/tasks.svelte';
	import Timer from '$lib/containers/timer.svelte';
</script>

<main>
	<div class="flex flex-col gap-16 xl:grid xl:grid-cols-3">
		<div>
			<Timer />
		</div>
		<div class="col-span-2">
			<Tasks />
		</div>
	</div>
</main>
