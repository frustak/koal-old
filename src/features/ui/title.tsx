import { Component } from "solid-js"

export const Title: Component = (props) => {
	return <p class="text-sm text-muted">{props.children}</p>
}
