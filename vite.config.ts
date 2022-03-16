import path from "path"
import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
	plugins: [solidPlugin()],
	build: {
		target: "esnext",
		polyfillDynamicImport: false,
	},
	resolve: {
		alias: {
			"@features": path.resolve(__dirname, "./src/features"),
			"@pages": path.resolve(__dirname, "./src/pages"),
		},
	},
})
