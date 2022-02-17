<script lang="ts">
	import Link from '$lib/components/link.svelte';
	import { user } from '$lib/stores/user';

	$: profileLink = $user ? '/profile' : '/sign-in';
</script>

<div class="flex justify-between py-4 text-lg">
	<a class="font-black text-center font-display" href="/">Koal</a>

	<Link to={profileLink}><i class="bi bi-person-circle" /></Link>
</div>
