import { Component, Show } from "solid-js"

export const ErrorMessage: Component = (props) => {
	return (
		<Show when={props.children}>
			<p class="text-sm text-negative">{props.children}</p>
		</Show>
	)
}
