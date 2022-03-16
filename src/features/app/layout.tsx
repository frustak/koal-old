import { Component } from "solid-js"

export const Layout: Component = (props) => {
	return <div class="container font-body py-10 text-primary">{props.children}</div>
}
