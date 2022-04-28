import axios from "axios"
import Cookies from "js-cookie"
const API_URL = import.meta.env.VITE_API_URL

const request = axios.create({
	baseURL: API_URL,
})

request.interceptors.request.use(
	(config) => {
		const token = Cookies.get("token")
		if (config.headers) config.headers.Authorization = "Bearer " + token
		return config
	},
	(error) => Promise.reject(error)
)

async function register(data: AuthRequest) {
	return request.post<AuthResponse>("/auth/register", data)
}

async function login(data: AuthRequest) {
	return request.post<AuthResponse>("/auth/login", data)
}

async function createProject(data: CreateProjectRequest) {
	return request.post<CreateProjectResponse>("/todo/projects", data)
}

async function getProjects() {
	return request.get<GetProjectsResponse>("/todo/projects")
}

async function createTask(data: CreateTaskRequest) {
	return request.post<CreateTaskResponse>("/todo/items", data)
}

async function getTasks() {
	return request.get<GetTasksResponse>("/todo/lists/undone")
}

async function getProject(id: string) {
	return request.get<GetProjectResponse>(`/todo/projects/${id}`)
}

async function deleteProject(id: string) {
	return request.delete<void>(`/todo/projects/${id}`)
}

async function deleteTask(id: string) {
	return request.delete<void>(`/todo/items/${id}`)
}

async function updateTask(id: string, data: UpdateTaskRequest) {
	return request.patch<void>(`/todo/items/${id}`, data)
}

export default {
	register,
	login,
	createProject,
	getProjects,
	createTask,
	getTasks,
	getProject,
	deleteProject,
	deleteTask,
	updateTask,
}

export interface UpdateTaskRequest {
	title?: string
	isDone?: boolean
}

export interface GetTasksResponse {
	items: TodoItem[]
}

export interface GetProjectResponse {
	info: Project
	items: TodoItem[]
}

export interface CreateTaskRequest {
	title: string
	projectId: string
}

export interface CreateTaskResponse {
	createdItem: TodoItem
}

export interface CreateProjectResponse {
	createdProject: Project
}

export interface TodoItem {
	id: string
	title: string
	isDone: boolean
	project: Project
}

export interface CreateProjectRequest {
	name: string
}

export interface GetProjectsResponse {
	projects: Project[]
}

export interface Project {
	id: string
	name: string
}

export interface ErrorResponse {
	code: number
	message: string
	details: unknown[]
}

export interface AuthRequest {
	email: string
	password: string
}

export interface AuthResponse {
	token: string
}
