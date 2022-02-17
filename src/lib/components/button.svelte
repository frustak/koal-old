<script lang="ts">
	type Type = 'button' | 'submit' | 'reset' | 'menu';

	let className: string = '';
	export { className as class };
	export let type: Type = 'button';
	export let isLoading = false;
	export let isError = false;
	export let isSuccess = false;
</script>

<button
	class={`px-6 disabled:cursor-not-allowed bg-primary text-background font-semibold py-2 hover:opacity-95 disabled:hover:opacity-100 ${className}`}
	disabled={isLoading || isError || isSuccess}
	{type}
	on:click
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
