<script lang="ts">
	type Type = 'button' | 'submit' | 'reset' | 'menu';

	export let type: Type = 'button';
	export let isLoading = false;
	export let isError = false;
	export let isSuccess = false;
</script>

<button
	class="button px-6 disabled:cursor-not-allowed disabled:hover:bg-primary"
	class:animate-pulse={isLoading}
	disabled={isLoading}
	{type}
>
	{#if isLoading}
		<i class="bi bi-arrow-clockwise inline-block animate-spin" />
	{:else if isError}
		<i class="bi bi-x-circle" />
	{:else if isSuccess}
		<i class="bi bi-check-circle" />
	{:else}
		<slot />
	{/if}
</button>
