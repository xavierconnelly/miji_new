import { error } from '@sveltejs/kit';
import { publications } from '../publications.js';

export function load({ params }) {
	const post = publications.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
}