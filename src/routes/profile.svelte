<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import { signOut } from '$lib/logic/auth';
</script>

<main class="flex flex-col items-center gap-y-20">
	<h2 class="text-7xl font-display">Account</h2>
	<Button class="px-10" on:click={signOut}>Sign out</Button>
</main>
