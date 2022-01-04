<button
	class="bg-stone-700 px-2 py-1 relative text-stone-50 rounded flex-grow flex-shrink-0 font-semibold hover:bg-stone-800 hover:text-stone-100"
	on:click
>
	<div class="absolute w-full h-full border-t border-l border-stone-700 -top-1 -left-1 rounded" />
	<slot />
</button>
