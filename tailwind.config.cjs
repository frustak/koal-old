const themeSwapper = require('tailwindcss-theme-swapper');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Quicksand', 'sans-serif'],
			display: ['MedievalSharp', 'cursive'],
			mono: ['Cutive Mono', 'monospace'],
		},
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {},
	},

	plugins: [
		require('@tailwindcss/forms'),
		themeSwapper({
			themes: [
				{
					name: 'base',
					selectors: [':root'],
					theme: {
						colors: {
							primary: '#323031',
							background: '#ffffff',
							text: '#323031',
							error: '#db3a34',
						},
					},
				},
			],
		}),
	],
};

module.exports = config;
