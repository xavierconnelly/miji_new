export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [];

export const dictionary = {
		"/": [5],
		"/about": [6,[2]],
		"/about/awards": [~7,[2]],
		"/about/awards/[id]": [~8,[2]],
		"/about/publications": [~9,[2]],
		"/about/publications/[slug]": [~10,[2]],
		"/projects": [~11,[3]],
		"/projects/[slug]": [~12,[3,4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';