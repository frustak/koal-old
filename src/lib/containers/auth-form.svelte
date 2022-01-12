<script context="module" lang="ts">
	export type OnSubmitAuth = (values: { email: string; password: string }) => void;
</script>

<script lang="ts">
	import Button from '$lib/components/button.svelte';

	export let submitText: string;
	export let onSubmit: OnSubmitAuth;
	export let isSubmitting: boolean;

	let email: string;
	let password: string;
</script>

<form
	class="flex flex-col gap-y-10 bg-primary/5 py-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 rounded-2xl"
	on:submit|preventDefault={() => onSubmit({ email, password })}
>
	<label class="label">
		Email
		<input placeholder="example@mail.com" type="email" class="input" required bind:value={email} />
	</label>
	<label class="label">
		Password
		<input
			placeholder="at least 8 characters"
			type="password"
			class="input"
			required
			minlength={8}
			bind:value={password}
		/>
	</label>

	<Button type="submit" isLoading={isSubmitting}>{submitText}</Button>
</form>
