module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			body: ["Patrick Hand", "ui-sans-serif"],
		},
		container: {
			center: true,
			padding: "5rem",
		},
		colors: {
			primary: "#333333",
			secondary: "#fefefe",
			muted: "#767676",
			negative: "#e63946",
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
}
