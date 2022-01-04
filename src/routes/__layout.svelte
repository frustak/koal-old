<script lang="ts">
	import Header from '$lib/containers/header.svelte';
	import ThemeWrapper from '$lib/containers/theme-wrapper.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import '../app.css';
</script>

<ThemeWrapper>
	<div class="min-h-screen dark:bg-stone-700 dark:text-stone-50 bg-stone-50 text-stone-700">
		<div class="container space-y-20">
			<Header />

			<slot />
		</div>
	</div>
</ThemeWrapper>
