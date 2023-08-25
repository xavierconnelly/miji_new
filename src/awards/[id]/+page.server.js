import { error } from '@sveltejs/kit';
import { awards } from './awards.js';

export function load({ params }) {
	const award = awards.find((award) => award.id === params.id);

	if (!award) throw error(404);

	return {
		award
	};
}