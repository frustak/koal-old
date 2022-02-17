<script lang="ts">
	export let to: string;
</script>

<a href={to} class="font-medium hover:underline underline-offset-1 max-w-fit">
	<slot />
</a>
