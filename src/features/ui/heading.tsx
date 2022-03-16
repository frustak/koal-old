import { Component, Match, mergeProps, Switch } from "solid-js"

interface HeadingProps {
	as?: "h1" | "h2"
}

export const Heading: Component<HeadingProps> = (baseProps) => {
	const props = mergeProps({ as: "h1" }, baseProps)

	return (
		<Switch>
			<Match when={props.as === "h1"}>
				<h1 class="text-4xl">{props.children}</h1>
			</Match>
			<Match when={props.as === "h2"}>
				<h2 class="text-2xl">{props.children}</h2>
			</Match>
		</Switch>
	)
}
