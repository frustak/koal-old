<script>
	import Tasks from '$lib/containers/tasks.svelte';
	import Timer from '$lib/containers/timer.svelte';
</script>

<main>
	<div class="flex flex-col xl:grid xl:grid-cols-3 gap-16">
		<div>
			<Timer />
		</div>
		<div class="col-span-2">
			<Tasks />
		</div>
	</div>
</main>
