<script lang="ts">
	import { goto } from '$app/navigation';
	import service from '$lib/api/service';
	import Auth from '$lib/containers/auth.svelte';
	import { mutation } from '$lib/stores/mutation';
	import Cookies from 'js-cookie';

	const { store: signUpStore, mutate: signUp } = mutation(service.signUp, {
		onSuccess: (data) => {
			Cookies.set('token', data.token);
			goto('/');
		}
	});
</script>

<Auth
	title="Sign up"
	onSubmit={signUp}
	isSubmitting={$signUpStore.isSubmitting}
	link={{ label: 'Sign in', to: '/sign-in' }}
/>
