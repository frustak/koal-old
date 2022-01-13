<script lang="ts">
	import service from '$lib/api/service';
	import Auth from '$lib/containers/auth.svelte';
	import { mutation } from '$lib/stores/mutation';
	import Cookies from 'js-cookie';

	const { store: signInStore, mutate: signIn } = mutation(service.signIn, {
		onSuccess: (data) => {
			Cookies.set('token', data.token);
			console.log(data);
		}
	});
</script>

<Auth
	title="Sign in"
	onSubmit={signIn}
	isSubmitting={$signInStore.isSubmitting}
	link={{ label: 'Sign up', to: '/sign-up' }}
/>
