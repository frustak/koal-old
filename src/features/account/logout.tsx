import { Button } from "@features/ui"
import Cookies from "js-cookie"
import { useNavigate } from "solid-app-router"
import { Component } from "solid-js"

export const Logout: Component = () => {
	const navigate = useNavigate()
	const logout = () => {
		navigate("/login")
		Cookies.remove("token")
	}

	return (
		<Button class="px-6" onClick={logout}>
			Logout
		</Button>
	)
}
