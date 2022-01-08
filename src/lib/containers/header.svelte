<script lang="ts">
	import { Theme, theme } from '$lib/stores/theme';

	function changeTheme() {
		switch ($theme) {
			case Theme.Light:
				$theme = Theme.Dark;
				break;
			case Theme.Dark:
				$theme = Theme.Light;
				break;
			default:
				break;
		}
	}
</script>

<div class="flex justify-between p-4 text-lg">
	<h1 class="font-black text-center font-display">Koal</h1>

	<button class="text-primary/95 hover:text-primary" on:click={changeTheme}>
		{#if $theme === 'dark'}
			<i class="bi bi-moon-stars-fill" />
		{:else}
			<i class="bi bi-sun-fill" />
		{/if}
	</button>
</div>
