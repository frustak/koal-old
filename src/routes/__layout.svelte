<script lang="ts">
	import Header from '$lib/containers/header.svelte';
	import { Theme, theme } from '$lib/stores/theme';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import '../app.css';
</script>

<svelte:head>
	<meta name="theme-color" content={$theme === Theme.Light ? '#fafaf9' : '#44403c'} />
</svelte:head>

<div class:dark={$theme === Theme.Dark}>
	<div class="min-h-screen dark:bg-stone-700 dark:text-stone-50 bg-stone-50 text-stone-700">
		<div class="container space-y-20">
			<Header />

			<slot />
		</div>
	</div>
</div>
