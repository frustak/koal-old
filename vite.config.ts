/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
	},
	 // prevent vite from obscuring rust errors
	 clearScreen: false,
	 // Tauri expects a fixed port, fail if that port is not available
	 server: {
	   port: 3000,
	   strictPort: true,
	 },
	 // to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
	 // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG`
	 // env variables
	 envPrefix: ['VITE_', 'TAURI_'],
	 build: {
	   // Tauri supports es2021
	   target: ['es2021', 'chrome97', 'safari13'],
	   // don't minify for debug builds
	   minify: !process.env.TAURI_DEBUG && 'esbuild',
	   // produce sourcemaps for debug builds
	   sourcemap: !!process.env.TAURI_DEBUG,
	 },
})
