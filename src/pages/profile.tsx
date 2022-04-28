import { Projects } from "@features/project"
import { Button, Heading, Title } from "@features/ui"
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import { useNavigate } from "solid-app-router"
import { Component } from "solid-js"

const Profile: Component = () => {
	const token = Cookies.get("token")
	const email = () => (token ? jwtDecode<{ sub: string }>(token).sub : null)
	const navigate = useNavigate()

	return (
		<div>
			<div class="flex gap-40">
				<Projects />

				<div class="space-y-7">
					<Heading as="h2">Profile</Heading>
					<div class="flex justify-between gap-48 items-center">
						<div>
							<Title>Email</Title>
							<p>{email()}</p>
						</div>
						<Button
							class="px-6"
							onClick={() => {
								navigate("/login")
								Cookies.remove("token")
							}}
						>
							Logout
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
