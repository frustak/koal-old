<script lang="ts">
	type Type = 'text' | 'email' | 'password';

	export let label: string;
	export let type: Type = 'text';
	export let placeholder: string = '';
	export let name: string;
	export let required: boolean = false;
	export let value: string = '';
	export let minlength: number | undefined = undefined;
</script>

<label class="flex flex-col text-sm gap-1">
	{label}
	<input
		class="focus:ring-primary focus:border-primary"
		{placeholder}
		{name}
		{required}
		bind:value
		{minlength}
		{...{ type }}
	/>
</label>
