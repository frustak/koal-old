<script lang="ts">
	import AuthForm, { OnSubmitAuth } from '$lib/containers/auth-form.svelte';

	export let title: string;
	export let link: { label: string; to: string };
	export let isLoading: boolean;
	export let isError: boolean;
	export let isSuccess: boolean;
	export let onSubmit: OnSubmitAuth;
</script>

<section class="max-w-md mx-auto flex flex-col gap-y-10">
	<h2 class="font-bold text-3xl">{title}</h2>
	<AuthForm submitText={title} {onSubmit} {isLoading} {isError} {isSuccess} />

	<a href={link.to} class="link self-end">{link.label}</a>
</section>
