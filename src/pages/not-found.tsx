import { Link } from "@features/ui"
import { Component } from "solid-js"

const NotFoundPage: Component = () => {
	return (
		<main>
			<h3 class="text-9xl my-10">
				404 <br /> Page not found
			</h3>
			<Link class="text-2xl hover:underline" href="/">
				Home page
			</Link>
		</main>
	)
}

export default NotFoundPage
