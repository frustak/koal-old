<script lang="ts">
	import { changeTheme, Theme, theme } from '$lib/stores/theme';
</script>

<div class="flex justify-between p-4 text-lg">
	<h1 class="font-black text-center font-display">Coal</h1>

	{#if $theme === 'dark'}
		<button on:click={() => changeTheme(Theme.Light)}>
			<i class="cursor-pointer bi bi-moon-stars-fill text-stone-200 hover:text-stone-100" />
		</button>
	{:else}
		<button on:click={() => changeTheme(Theme.Dark)}>
			<i class="cursor-pointer bi bi-sun-fill text-stone-600 hover:text-stone-700" />
		</button>
	{/if}
</div>
