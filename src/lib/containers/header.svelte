<script lang="ts">
	import { changeTheme } from '$lib/stores/theme';
</script>

<div class="flex justify-between p-4 text-lg">
	<a class="font-black text-center font-display text-primary/95 hover:text-primary" href="/">
		Koal
	</a>

	<div class="space-x-6">
		<button class="button-icon" on:click={changeTheme} title="theme">
			<i class="bi bi-segmented-nav" />
		</button>
		<a class="button-icon" title="account" href="/sign-in">
			<i class="bi bi-person-circle" />
		</a>
	</div>
</div>
