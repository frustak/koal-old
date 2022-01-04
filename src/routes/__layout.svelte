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
	<div class="dark:bg-stone-700 dark:text-stone-50 bg-stone-50 text-stone-700 min-h-screen">
		<div class="container space-y-20">
			<div class="flex justify-between p-4 text-lg">
				<h1 class="font-black text-center font-display">Coal</h1>

				{#if theme === 'dark'}
					<i
						class="bi bi-moon-stars-fill cursor-pointer text-stone-200 hover:text-stone-100"
						on:click={() => changeTheme('light')}
					/>
				{:else}
					<i
						class="bi bi-sun-fill cursor-pointer text-stone-600 hover:text-stone-700"
						on:click={() => changeTheme('dark')}
					/>
				{/if}
			</div>

			<slot />
		</div>
	</div>
</div>
