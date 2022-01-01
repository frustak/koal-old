const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Quicksand', 'sans-serif']
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
