const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		fontFamily: {
			sans: ['Quicksand', 'sans-serif'],
			display: ['MedievalSharp', 'cursive']
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
