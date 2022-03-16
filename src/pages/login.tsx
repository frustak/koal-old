import { AuthForm } from "@features/account"
import { Header, Layout } from "@features/app"
import { Link } from "@features/ui/link"
import { Component } from "solid-js"

const Login: Component = () => {
	return (
		<Layout>
			<Header />
			<AuthForm title="Sign in" submitText="Login" subtitle={<RegisterLink />} />
		</Layout>
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
