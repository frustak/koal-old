import { AuthForm } from "@features/account"
import api from "@features/api"
import { Header } from "@features/app"
import { createMutation } from "@features/query"
import Cookies from "js-cookie"
import { Link, useNavigate } from "solid-app-router"
import { Component } from "solid-js"

const Register: Component = () => {
	const navigate = useNavigate()

	const mutation = createMutation(api.register, {
		onSuccess: (data) => {
			Cookies.set("token", data.token)
			navigate("/home")
		},
	})

	return (
		<div>
			<Header />
			<AuthForm
				title="Sign up"
				submitText="Register"
				subtitle={<LoginLink />}
				onSubmit={mutation.mutate}
				isLoading={mutation.isLoading()}
				error={mutation.error()?.message}
			/>
		</div>
	)
}

const LoginLink: Component = () => {
	return (
		<p>
			or <Link href="/login">sign in</Link>
		</p>
	)
}

export default Register
