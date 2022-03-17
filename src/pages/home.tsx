import { Layout } from "@features/app"
import { Heading, Title } from "@features/ui"
import type { Component } from "solid-js"

const Home: Component = () => {
	return (
		<Layout>
			<div class="flex">
				<div class="max-w-xs grow shrink-0 space-y-14">
					<div class="space-y-2">
						<Title>example@gmail.com</Title>
						<Heading>Home</Heading>
					</div>
					<div class="space-y-3">
						<div class="flex items-center">
							<Title>Projects</Title>
							<i class="bi bi-plus-square ml-32" />
						</div>
						<div class="space-y-3 text-lg">
							<p>Work</p>
							<p>School</p>
							<p>Knowledge</p>
							<p>Life</p>
						</div>
					</div>
				</div>

				<div class="space-y-14 ml-40 max-w-md grow">
					<div class="space-y-2">
						<div class="flex items-center justify-between">
							<Title>Project</Title>
							<i class="bi bi-x-square" />
						</div>
						<Heading as="h2">Work</Heading>
					</div>
					<div class="space-y-6">
						<div class="flex items-center justify-between">
							<Title>Tasks</Title>
							<i class="bi bi-plus-square" />
						</div>
						<div class="space-y-8 text-lg">
							<div class="flex items-center justify-between">
								<p class="line-through">Implement automated ops trigger node</p>
								<div class="flex items-center gap-2 text-base">
									<i class="bi bi-x-square" />
									<i class="bi bi-check-square" />
								</div>
							</div>
							<p>Purchase groceries</p>
							<p>Kill dark souls boss</p>
							<p>Read real time rendering</p>
							<p>Design Koal</p>
							<p>Bring Koal to life</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Home
