<script>
	import Tasks from '$lib/components/tasks.svelte';
	import Timer from '$lib/components/timer.svelte';
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
