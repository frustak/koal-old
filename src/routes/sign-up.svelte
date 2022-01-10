<script>
	import Auth from '$lib/containers/auth.svelte';
</script>

<Auth title="Sign up" onSubmit={console.log} link={{ label: 'Sign in', to: '/sign-in' }} />
