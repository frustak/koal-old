<script lang="ts">
	import { Theme, theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		switch (savedTheme) {
			case 'dark':
				$theme = Theme.Dark;
			case 'light':
			default:
				$theme = Theme.Light;
		}
	});
</script>

<svelte:head>
	<meta name="theme-color" content={$theme === Theme.Light ? '#fafaf9' : '#44403c'} />
</svelte:head>

<div class:dark={$theme === Theme.Dark}>
	<slot />
</div>
