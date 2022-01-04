<button
	class="relative flex-grow flex-shrink-0 px-2 py-1 font-semibold rounded bg-stone-700 text-stone-100 hover:bg-stone-800 hover:text-stone-200 dark:bg-stone-100 dark:text-stone-700 dark:hover:text-stone-800 dark:hover:bg-stone-200"
	on:click
>
	<div
		class="absolute w-full h-full border-t border-l rounded border-stone-700 -top-1 -left-1 dark:border-stone-100"
	/>
	<slot />
</button>
