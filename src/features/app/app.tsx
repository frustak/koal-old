import { Router, useRoutes } from "solid-app-router"
import { Component } from "solid-js"
import { Layout } from "./layout"
import { routes } from "./routes"

export const App: Component = () => {
	const Routes = useRoutes(routes)

	return (
		<Router>
			<Layout>
				<Routes />
			</Layout>
		</Router>
	)
}
