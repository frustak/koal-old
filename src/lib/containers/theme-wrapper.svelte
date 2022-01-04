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

<div class:dark={$theme === Theme.Dark}>
	<slot />
</div>
