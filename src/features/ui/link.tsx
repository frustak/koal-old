import { Link as RouterLink } from "solid-app-router"
import { Component, ComponentProps } from "solid-js"

type LinkProps = ComponentProps<typeof RouterLink>
export const Link: Component<LinkProps> = (props) => {
	return <RouterLink class="hover:underline underline-offset-1" {...props} />
}
