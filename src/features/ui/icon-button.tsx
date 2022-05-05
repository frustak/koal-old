import { Component, ComponentProps } from "solid-js"

interface IconButtonProps extends ComponentProps<"button"> {
	icon: string
}
export const IconButton: Component<IconButtonProps> = (props) => {
	return (
		<button
			class="hover:bg-primary/5 transition rounded w-6 h-6 flex items-center justify-center text-base"
			type="button"
			{...props}
		>
			<i class={props.icon} />
		</button>
	)
}
