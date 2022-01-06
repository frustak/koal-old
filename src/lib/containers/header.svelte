<script lang="ts">
	import { Theme, theme } from '$lib/stores/theme';
</script>

<div class="flex justify-between p-4 text-lg">
	<h1 class="font-black text-center font-display">Coal</h1>

	{#if $theme === 'dark'}
		<button class="text-stone-200 hover:text-stone-100" on:click={() => ($theme = Theme.Light)}>
			<i class="bi bi-moon-stars-fill" />
		</button>
	{:else}
		<button class="text-stone-600 hover:text-stone-700" on:click={() => ($theme = Theme.Dark)}>
			<i class="bi bi-sun-fill" />
		</button>
	{/if}
</div>
