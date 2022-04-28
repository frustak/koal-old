import { Component } from "solid-js"

export const Loading: Component = () => {
	return (
		<div class="flex items-center justify-center">
			<i class="bi bi-triangle-fill animate-spin" />
		</div>
	)
}
