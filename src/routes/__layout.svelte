<script lang="ts">
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import { onMount } from 'svelte';
	import '../app.css';

	type Theme = 'light' | 'dark';
	let theme: Theme;

	onMount(() => {
		theme = localStorage.getItem('theme') as Theme;
	});

	function changeTheme(newTheme: Theme) {
		theme = newTheme;
		localStorage.setItem('theme', newTheme);
	}
</script>

<div class:dark={theme === 'dark'}>
	<div class="min-h-screen dark:bg-stone-700 dark:text-stone-50 bg-stone-50 text-stone-700">
		<div class="container space-y-20">
			<div class="flex justify-between p-4 text-lg">
				<h1 class="font-black text-center font-display">Coal</h1>

				{#if theme === 'dark'}
					<button on:click={() => changeTheme('light')}>
						<i class="cursor-pointer bi bi-moon-stars-fill text-stone-200 hover:text-stone-100" />
					</button>
				{:else}
					<button on:click={() => changeTheme('dark')}>
						<i class="cursor-pointer bi bi-sun-fill text-stone-600 hover:text-stone-700" />
					</button>
				{/if}
			</div>

			<slot />
		</div>
	</div>
</div>
