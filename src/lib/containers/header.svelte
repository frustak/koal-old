<script lang="ts">
	import { changeTheme } from '$lib/stores/theme';
	import { user } from '$lib/stores/user';
	import { derived } from 'svelte/store';

	const profileLink = derived([user], ([user]) => {
		return user ? '/profile' : '/sign-in';
	});
</script>

<div class="flex justify-between p-4 text-lg">
	<a class="font-black text-center font-display text-primary/95 hover:text-primary" href="/">
		Koal
	</a>

	<div class="space-x-6">
		<button class="button-icon" on:click={changeTheme} title="theme">
			<i class="bi bi-segmented-nav" />
		</button>
		<a class="button-icon" title="account" href={$profileLink}>
			<i class="bi bi-person-circle" />
		</a>
	</div>
</div>
