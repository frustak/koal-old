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
							primary: '#44403c',
							background: '#fafaf9',
							error: '#dc2626',
						},
					},
				},
				{
					name: 'gruvbox-light',
					selectors: ['.gruvbox-light'],
					theme: {
						colors: {
							primary: '#3c3836',
							background: '#fbf1c7',
							error: '#cc241d',
						},
					},
				},
				{
					name: 'gruvbox',
					selectors: ['.gruvbox'],
					theme: {
						colors: {
							primary: '#ebdbb2',
							background: '#282828',
							error: '#fb4b37',
						},
					},
				},
				{
					name: 'void',
					selectors: ['.void'],
					theme: {
						colors: {
							primary: '#e0aaff',
							background: '#10002b',
							error: '#ef4444',
						},
					},
				},
				{
					name: 'blue',
					selectors: ['.blue'],
					theme: {
						colors: {
							primary: '#1d3557',
							background: '#a8dadc',
							error: '#991b1b',
						},
					},
				},
				{
					name: 'green',
					selectors: ['.green'],
					theme: {
						colors: {
							primary: '#132a13',
							background: '#ecf39e',
							error: '#b91c1c',
						},
					},
				},
			],
		}),
	],
};

module.exports = config;
