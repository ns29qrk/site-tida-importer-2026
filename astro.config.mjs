// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TIDA Importer 2026',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/ns29qrk/angra-tida-importer-2026',
				},
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ja: {
					label: '日本語',
					lang: 'ja',
				},
				'zh-tw': {
					label: '繁體中文',
					lang: 'zh-TW',
				},
			},
			sidebar: [
				{
					label: 'Start Here',
					translations: {
						ja: 'ここから始める',
						'zh-tw': '開始使用',
					},
					items: [
						{ label: 'Introduction', slug: '' }, // Link to home content if possible, or we use index page as splash
					],
				},
			],
		}),
	],
	site: 'https://ns.29q.ryukyu',
	base: '/tida-importer-2026',
	outDir: './dist/tida-importer-2026',
});
