import { error } from '@sveltejs/kit';
import { projects } from '../projects.js';

export function load({ params }) {
	const project = projects.find((project) => project.slug === params.slug);

	if (!project) throw error(404);

	return {
		project
	};
}