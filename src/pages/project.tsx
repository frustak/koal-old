import api from "@features/api"
import { ProjectDetail } from "@features/project"
import { ProjectTasks } from "@features/project/tasks"
import { Sidebar } from "@features/sidebar"
import { useParams } from "solid-app-router"
import { Component, createResource } from "solid-js"

const ProjectPage: Component = () => {
	const params = useParams<{ id: string }>()
	const projectId = () => params.id
	const [getProjectResponse, { refetch: refetchGetProject }] = createResource(projectId, (id) =>
		api.getProject(id)
	)
	const projectName = () => getProjectResponse()?.data.info.name
	const tasks = () => getProjectResponse()?.data.items

	return (
		<div>
			<div class="flex gap-40">
				<Sidebar />
				<div class="space-y-14 max-w-md grow">
					<ProjectDetail id={projectId()} name={projectName()} />
					<ProjectTasks
						projectId={projectId()}
						tasks={tasks()}
						loading={getProjectResponse.loading}
						refetch={refetchGetProject}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProjectPage
