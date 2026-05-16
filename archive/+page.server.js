import { awards } from './awards.js';

export function load() {
	return {
		gifts: awards.map((award) => ({

			id: award.id,
			link: award.link,
			award: award.award,
			awarder: award.awarder,
			prize: award.prize,
			project: award.project
		}))
	};
}