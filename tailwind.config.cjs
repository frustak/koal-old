const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		fontFamily: {
			sans: ['Quicksand', 'sans-serif'],
			display: ['MedievalSharp', 'cursive'],
			mono: ['Cutive Mono', 'monospace']
		},
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {}
	},

	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
