<script lang="ts">
	type Type = 'button' | 'submit' | 'reset' | 'menu';

	export let isLoading: boolean = false;
	export let type: Type;
</script>

<button
	class="button px-6 disabled:cursor-not-allowed"
	class:animate-pulse={isLoading}
	disabled={isLoading}
	{type}
>
	{#if isLoading}
		<i class="bi bi-arrow-clockwise inline-block animate-spin" />
	{:else}
		<slot />
	{/if}
</button>
