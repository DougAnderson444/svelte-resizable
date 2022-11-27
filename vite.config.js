import { sveltekit } from '@sveltejs/kit/vite';
import path, { dirname } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@douganderson444/svelte-resizable': path.resolve('./src/lib')
		}
	},
	build: {
		rollupOptions: {
			// plugins: [postcss({ extract: true, minimize: true })] // no effect?
		}
	}
};

export default config;
