import { Layout } from "@features/app"
import { Heading, Title } from "@features/ui"
import { Component } from "solid-js"

const Profile: Component = () => {
	return (
		<Layout>
			<div class="flex justify-center mt-10">
				<div class="space-y-7">
					<Heading as="h2">Profile</Heading>
					<div>
						<Title>Email</Title>
						<p>example@email.com</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Profile
