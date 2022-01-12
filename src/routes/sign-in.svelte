<script lang="ts">
	import service from '$lib/api/service';
	import Auth from '$lib/containers/auth.svelte';
	import { mutation } from '$lib/stores/mutation';

	const { store: signInStore, mutate: signIn } = mutation(service.signIn);
</script>

<Auth
	title="Sign in"
	onSubmit={signIn}
	isSubmitting={$signInStore.isSubmitting}
	link={{ label: 'Sign up', to: '/sign-up' }}
/>
