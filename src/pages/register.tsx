import { AuthForm } from "@features/account"
import { Header, Layout } from "@features/app"
import { Link } from "@features/ui/link"
import { Component } from "solid-js"

const Register: Component = () => {
	return (
		<Layout>
			<Header />
			<AuthForm title="Sign up" submitText="Register" subtitle={<LoginLink />} />
		</Layout>
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
