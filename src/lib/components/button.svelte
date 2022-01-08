<button
	class="relative flex-grow flex-shrink-0 px-2 py-1 font-semibold rounded bg-primary/95 text-background/95 hover:bg-primary hover:text-background focus:bg-primary focus:text-background"
	on:click
>
	<div class="absolute w-full h-full border-t border-l rounded border-primary -top-1 -left-1" />
	<slot />
</button>
