import { Component } from "solid-js"

export const Layout: Component = (props) => {
	return (
		<div class="container font-body py-12 text-primary selection:bg-primary selection:text-secondary">
			{props.children}
		</div>
	)
}
