<script context="module" lang="ts">
	export type OnSubmitAuth = (values: { email: string; password: string }) => void;
</script>

<script lang="ts">
	import type { ApiError } from '$lib/api/schemas';
	import Button from '$lib/components/button.svelte';
	import ErrorMessage from '$lib/components/error-message.svelte';
	import Field from '$lib/components/field.svelte';

	export let submitText: string;
	export let onSubmit: OnSubmitAuth;
	export let isLoading: boolean;
	export let isError: boolean;
	export let error: ApiError | null;
	export let isSuccess: boolean;

	let email: string;
	let password: string;
</script>

<form
	class="flex flex-col rounded-2xl gap-y-6"
	on:submit|preventDefault={() => onSubmit({ email, password })}
>
	<Field
		label="Email"
		placeholder="example@email.com"
		type="email"
		name="email"
		required
		bind:value={email}
	/>
	<Field
		label="Password"
		placeholder="at least 8 characters"
		type="password"
		name="password"
		required
		minlength={8}
		bind:value={password}
	/>

	<div class="flex flex-col gap-4">
		<Button type="submit" {isLoading} {isError} {isSuccess}>{submitText}</Button>
		{#if error}
			<ErrorMessage>{error.message}</ErrorMessage>
		{/if}
	</div>
</form>
