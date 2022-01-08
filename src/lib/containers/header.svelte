<script lang="ts">
	import { changeTheme } from '$lib/stores/theme';
</script>

<div class="flex justify-between p-4 text-lg">
	<h1 class="font-black text-center font-display">Koal</h1>

	<button class="text-primary/95 hover:text-primary" on:click={changeTheme}>
		<i class="bi bi-segmented-nav" />
	</button>
</div>
