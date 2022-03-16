import { Component } from "solid-js"

export const Button: Component = (props) => {
	return (
		<button class="bg-primary text-secondary flex items-center justify-center rounded h-9 hover:text-primary hover:bg-secondary border border-primary">
			{props.children}
		</button>
	)
}
