import { Component, ComponentProps } from "solid-js"

export const IconButton: Component<ComponentProps<"button">> = (props) => {
	return (
		<button
			class="hover:bg-primary/5 transition rounded w-6 h-6 flex items-center justify-center text-base"
			type="button"
			{...props}
		>
			{props.children}
		</button>
	)
}
