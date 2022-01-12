<script lang="ts">
	export let isLoading: boolean = false;
	export let type: string;
</script>

<button
	class="button px-6 disabled:cursor-not-allowed"
	class:animate-pulse={isLoading}
	{type}
	disabled={isLoading}
>
	{#if isLoading}
		<i class="bi bi-arrow-clockwise inline-block animate-spin" />
	{:else}
		<slot />
	{/if}
</button>
