import { Logout } from "@features/account"
import { Sidebar } from "@features/sidebar"
import { Heading, Title } from "@features/ui"
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import { Component } from "solid-js"

const ProfilePage: Component = () => {
	const token = Cookies.get("token")
	const email = () => (token ? jwtDecode<{ sub: string }>(token).sub : null)

	return (
		<div>
			<div class="flex gap-40">
				<Sidebar />
				<div class="space-y-7">
					<Heading as="h2">Profile</Heading>
					<div class="flex justify-between gap-48 items-center">
						<div>
							<Title>Email</Title>
							<p>{email()}</p>
						</div>
						<Logout />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
