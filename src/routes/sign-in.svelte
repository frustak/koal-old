<script lang="ts">
	import service from '$lib/api/service';
	import Auth from '$lib/containers/auth.svelte';
	import { mutation } from '$lib/utils/mutation';
	import Cookies from 'js-cookie';

	const { store: signInStore, mutate: signIn } = mutation(service.signIn, {
		onSuccess: (data) => {
			Cookies.set('token', data.token);
			console.log(data);
		},
	});
</script>

<Auth
	title="Sign in"
	onSubmit={signIn}
	isLoading={$signInStore.isLoading}
	isError={$signInStore.isRecentError}
	isSuccess={$signInStore.isRecentSuccess}
	link={{ label: 'Sign up', to: '/sign-up' }}
/>
