<script lang="ts">
	import type { ApiError } from '$lib/api/schemas';
	import Link from '$lib/components/link.svelte';
	import AuthForm, { OnSubmitAuth } from '$lib/containers/auth-form.svelte';

	export let title: string;
	export let link: { label: string; to: string };
	export let isLoading: boolean;
	export let isError: boolean;
	export let error: ApiError | null;
	export let isSuccess: boolean;
	export let onSubmit: OnSubmitAuth;
</script>

<main class="max-w-md mx-auto flex flex-col gap-y-10">
	<h2 class="font-bold text-3xl">{title}</h2>
	<AuthForm submitText={title} {onSubmit} {isLoading} {isError} {isSuccess} {error} />

	<Link to={link.to}>{link.label}</Link>
</main>
