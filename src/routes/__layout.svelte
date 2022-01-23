<script lang="ts">
	import Header from '$lib/containers/header.svelte';
	import { onMountApp } from '$lib/logic/mount';
	import { getThemeBg, theme } from '$lib/stores/theme';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(onMountApp);
</script>

<svelte:head>
	<meta name="theme-color" content={getThemeBg($theme)} />
</svelte:head>

<div class={$theme}>
	<div class="min-h-screen bg-background text-primary">
		<div class="container space-y-16 py-4">
			<Header />

			<slot />
		</div>
	</div>
</div>
