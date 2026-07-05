import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Served as a project page at https://<user>.github.io/fiddelico/,
		// so assets and links must be prefixed with this base path.
		// If you later move to a root user page (fiddelico.github.io),
		// set BASE_PATH='' (or delete paths.base) and redeploy.
		paths: {
			base: process.env.BASE_PATH ?? '/fiddelico'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		})
	}
};

export default config;
