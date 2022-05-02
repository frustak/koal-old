import { Link } from "@features/ui"
import { Component } from "solid-js"

const LandingPage: Component = () => {
	return (
		<div class="space-y-10 max-w-prose mx-auto">
			<h1 class="text-6xl">Koal</h1>
			<div>
				<h2 class="text-2xl">What am I?</h2>
				<p>
					Hey there. I help you manage your tasks and time better. That's all.
					<br />
					to get started:
				</p>
			</div>
			<div class="space-x-6 text-xl">
				<Link href="/register">Sign up</Link>
				<span class="text-sm">or</span>
				<Link href="/login">Sign in</Link>
			</div>
		</div>
	)
}

export default LandingPage
