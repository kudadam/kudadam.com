/* 
This file exports a handler which is responsible for minifying html files generated by SvelteKit
*/

import { minify } from 'html-minifier';

const minification_options = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true,
	removeEmptyElements: true
};

/** @type {import('@sveltejs/kit').Handle} */
const Minify = async ({ event, resolve }) => {
	/** @type {Response} */
	const response = await resolve(event);
	if (response.headers.get('content-type')) {
		//@ts-ignore
		if (response.headers.get('content-type').startsWith('text/html')) {
			let body = await response.text();
			return new Response(minify(body, minification_options), {
				headers: {
					'content-type': 'text/html'
				}
			});
		}
	}

	return response;
};

export default Minify;
