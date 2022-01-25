<script lang="ts">
	import service from '$lib/api/service';
	import Auth from '$lib/containers/auth.svelte';
	import { onAuthSuccess } from '$lib/logic/auth';
	import { mutation } from '$lib/utils/mutation';

	const { store: signUpState, mutate: signUp } = mutation(service.signUp, {
		onSuccess: onAuthSuccess,
	});
</script>

<Auth
	title="Sign up"
	onSubmit={signUp}
	isLoading={$signUpState.isLoading}
	isError={$signUpState.isRecentError}
	error={$signUpState.error}
	isSuccess={$signUpState.isRecentSuccess}
	link={{ label: 'Sign in', to: '/sign-in' }}
/>
