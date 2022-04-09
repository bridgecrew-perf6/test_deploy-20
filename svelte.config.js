import adapter from '@sveltejs/adapter-static';
import { searchForWorkspaceRoot } from 'vite'

import path from 'path';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			prsecompress: false,
			sr: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/micoda' : ''
			//base: process.env.NODE_ENV === 'production' ? '' : ''
		},
		trailingSlash: 'always',

		// Build throws error for all links pointing to the backend. Therefor we need to exclude for checking the link during build.
		prerender: {
			onError: ({ status, path, referrer, referenceType }) => {
				if (path.startsWith('/backend/') || path.startsWith('/images/') || path == '/') {
					//do nothing as it links to backend
				} else {
					throw new Error(
						path +
							' Missing link.' +
							`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`
					);
				}
				console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
			},
			default: true
		},
		vite: {
			resolve: {
			  alias: {
				src: path.resolve('./src'),
			  },
			},
			server: {
			  fs: {
				allow: ['./static'],
			  },
			},
		  },

	},
};
