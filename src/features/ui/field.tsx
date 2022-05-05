import { Control } from "@features/form"
import { Component, ComponentProps } from "solid-js"
import { ErrorMessage } from "./error-message"

interface FieldProps<T> extends ComponentProps<"input"> {
	name: string
	control: Control<T>
	label?: string
	type?: "text" | "email" | "password"
}
export function Field<T extends Record<string, string>>(props: FieldProps<T>) {
	return (
		<BaseField
			fieldValue={props.control.signal[0]()[props.name]}
			onFieldValueChange={(value) =>
				props.control.signal[1]((prev) => ({ ...prev, [props.name]: value }))
			}
			error={props.control.errors()?.find((error) => error.path[0] === props.name)?.message}
			{...props}
		/>
	)
}

interface BaseFieldProps extends ComponentProps<"input"> {
	label?: string
	fieldValue?: string
	onFieldValueChange?: (value: string) => void
	error?: string
}
const BaseField: Component<BaseFieldProps> = (props) => {
	return (
		<div class="flex flex-col w-full">
			<label class="text-sm text-muted" for={props.label}>
				{props.label}
			</label>
			<input
				{...props}
				class="bg-primary/5 rounded px-2 py-1 text-base border-none focus:ring-primary"
				id={props.label}
				type={props.type}
				value={props.fieldValue}
				onInput={(e) => props.onFieldValueChange?.(e.currentTarget.value)}
			/>
			<ErrorMessage>{props.error}</ErrorMessage>
		</div>
	)
}
