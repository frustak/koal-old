import { lazy } from "solid-js"

export const routes = [
	{
		path: "/",
		component: lazy(() => import("@pages/home")),
	},
	{
		path: "/*",
		component: lazy(() => import("@pages/not-found")),
	},
]
