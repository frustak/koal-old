<script lang="ts">
	import service from '$lib/api/service';
	import Auth from '$lib/containers/auth.svelte';
	import { onAuthSuccess } from '$lib/logic/auth';
	import { mutation } from '$lib/utils/mutation';

	const { store: signInState, mutate: signIn } = mutation(service.signIn, {
		onSuccess: onAuthSuccess,
	});
</script>

<Auth
	title="Sign in"
	onSubmit={signIn}
	isLoading={$signInState.isLoading}
	isError={$signInState.isRecentError}
	error={$signInState.error}
	isSuccess={$signInState.isRecentSuccess}
	link={{ label: 'Sign up', to: '/sign-up' }}
/>
