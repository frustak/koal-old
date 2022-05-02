import { Component, ComponentProps, mergeProps, Show } from "solid-js"
import { Loading } from "./loading"

interface ButtonProps extends ComponentProps<"button"> {
	isLoading?: boolean
}
export const Button: Component<ButtonProps> = (baseProps) => {
	const props = mergeProps({ type: "button" }, baseProps)

	return (
		<button
			class={
				"bg-primary text-secondary flex items-center justify-center rounded h-9 border border-primary transition " +
				props.class
			}
			classList={{
				"cursor-wait": props.isLoading,
				"hover:text-primary hover:bg-secondary": !props.isLoading,
			}}
			disabled={props.isLoading}
			{...props}
		>
			<Show when={!props.isLoading} fallback={<Loading />}>
				{props.children}
			</Show>
		</button>
	)
}
