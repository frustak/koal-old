import { AuthForm } from "@features/account"
import api from "@features/api"
import { Header } from "@features/app"
import { createMutation } from "@features/query"
import { Link } from "@features/ui/link"
import Cookies from "js-cookie"
import { useNavigate } from "solid-app-router"
import { Component } from "solid-js"

const Login: Component = () => {
	const navigate = useNavigate()

	const mutation = createMutation(api.login, {
		onSuccess: (data) => {
			Cookies.set("token", data.token)
			navigate("/home")
		},
	})

	return (
		<div>
			<Header />
			<AuthForm
				title="Sign in"
				submitText="Login"
				subtitle={<RegisterLink />}
				onSubmit={mutation.mutate}
				isLoading={mutation.isLoading()}
				error={mutation.error()?.message}
			/>
		</div>
	)
}

const RegisterLink: Component = () => {
	return (
		<p>
			or <Link href="/register">sign up</Link>
		</p>
	)
}

export default Login
