<script>
	import Auth from '$lib/containers/auth.svelte';
</script>

<Auth
	title="Sign in"
	onSubmit={console.log}
	isSubmitting={true}
	link={{ label: 'Sign up', to: '/sign-up' }}
/>
