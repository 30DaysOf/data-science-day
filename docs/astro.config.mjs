import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	site: 'https://30daysof.github.io',
	base: '/data-science-day',
	trailingSlash: "always",
	
	integrations: [
		starlight({
			title: 'Leap Into Data Science',
			logo: {
				light: './src/assets/astro-light.png',
				dark: './src/assets/astro-dark.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/nitya',
				linkedin: 'https://www.linkedin.com/in/nityan',
				twitter: 'https://twitter.com/nitya',
				youtube: 'https://youtube.com/@nityanarasimhan',
			},
			
			defaultLocale: 'root', // optional
			locales: {
			  root: {
				label: 'English',
				lang: 'en', // lang is required for root locales
			  },
			},

			sidebar: [
				{
					label: '1️⃣ | Fundamentals',
					autogenerate: { directory: 'week-1' },
				},
				{
					label: '2️⃣ | Developer Tools',
					autogenerate: { directory: 'week-2' },
				},
				{
					label: '3️⃣ | Real World Usage',
					items: [
						{ label: 'Overview', link: '/week-3/' },
					],
				},
				{
					label: '4️⃣ | Advanced Topics',
					items: [
						{ label: 'Overview', link: '/week-4/' },
					],
				},
				{
					label: 'Concepts',
					items: [
						{ label: 'Learn Fundamentals', link: '/concepts/example/' },
					],
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
			],
		}),

	],
});
