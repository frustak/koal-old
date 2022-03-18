import { Component, mergeProps, Show } from "solid-js"

interface ButtonProps {
	type?: "button" | "submit"
	isLoading?: boolean
}

export const Button: Component<ButtonProps> = (baseProps) => {
	const props = mergeProps({ type: "button" }, baseProps)

	return (
		<button
			type={props.type}
			class="bg-primary text-secondary flex items-center justify-center rounded h-9 border border-primary transition"
			classList={{
				"cursor-wait": props.isLoading,
				"hover:text-primary hover:bg-secondary": !props.isLoading,
			}}
			disabled={props.isLoading}
		>
			<Show when={!props.isLoading} fallback={<Loading />}>
				{props.children}
			</Show>
		</button>
	)
}

const Loading: Component = () => {
	return <i class="bi bi-arrow-clockwise animate-spin" />
}
