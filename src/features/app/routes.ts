import { lazy } from "solid-js"

export const routes = [
	{
		path: "/register",
		component: lazy(() => import("@pages/register")),
	},
	{
		path: "/login",
		component: lazy(() => import("@pages/login")),
	},
	{
		path: "/profile",
		component: lazy(() => import("@pages/profile")),
	},
	{
		path: "/",
		component: lazy(() => import("@pages/home")),
	},
	{
		path: "/*",
		component: lazy(() => import("@pages/not-found")),
	},
]
