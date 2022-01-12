<script lang="ts">
	import service from '$lib/api/service';
	import Auth from '$lib/containers/auth.svelte';
	import { mutation } from '$lib/stores/mutation';

	const { store: signUpStore, mutate: signUp } = mutation(service.signUp);
</script>

<Auth
	title="Sign up"
	onSubmit={signUp}
	isSubmitting={$signUpStore.isSubmitting}
	link={{ label: 'Sign in', to: '/sign-in' }}
/>
