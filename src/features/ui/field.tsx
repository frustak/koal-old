import { Component, mergeProps } from "solid-js"

interface FieldProps {
	label: string
	type?: "text" | "email" | "password"
}

export const Field: Component<FieldProps> = (baseProps) => {
	const props = mergeProps({ type: "text" }, baseProps)

	return (
		<div class="flex flex-col">
			<label class="text-sm text-muted" for={props.label}>
				{props.label}
			</label>
			<input
				class="bg-primary/5 rounded px-2 py-1 text-base border-none"
				id={props.label}
				type={props.type}
			/>
		</div>
	)
}
