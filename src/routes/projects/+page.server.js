
// This calls in the data from the file below
import { projects } from './projects.js';

// This takes that data and shortens it just one word
// Seems like this is necessary to talk between parent / children
export function load() {
	return {
		banana: projects.map((project) => ({
			slug: project.slug,
			title: project.title,
			colour: project.colour,
			hex: project.hex,
			prev: project.prev,
			next: project.next,
			images: project.images
		}))
	};
}