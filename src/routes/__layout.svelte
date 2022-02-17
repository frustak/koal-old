<script lang="ts">
	import Header from '$lib/containers/header.svelte';
	import { onMountApp } from '$lib/logic/mount';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import { onMount } from 'svelte';
	import '../global.css';

	onMount(onMountApp);
</script>

<div class="min-h-screen bg-background text-text">
	<div class="container space-y-10">
		<Header />

		<slot />
	</div>
</div>
