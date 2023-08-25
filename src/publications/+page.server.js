import { publications } from './publications.js';

export function load() {
	return {
		summaries: publications.map((post) => ({
			slug: post.slug,
			publisher: post.publisher,
			year: post.year,
			issue: post.issue,
			project: post.project
		}))
	};
}

