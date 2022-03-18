import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL

const request = axios.create({
	baseURL: API_URL,
})

async function register(data: AuthRequest) {
	return request.post<AuthResponse>("/auth/register", data)
}

async function login(data: AuthRequest) {
	return request.post<AuthResponse>("/auth/login", data)
}

export default {
	register,
	login,
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
