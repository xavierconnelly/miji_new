import { client } from '$lib/server/microcms';

export const prerender = true;

export async function load() {
    const { contents } = await client.getList({
        endpoint: 'projects',
        queries: { limit: 100 }
    });

    // Normalise colour — microCMS returns Selectable Fields as arrays
    const projects = contents.map(p => ({
        ...p,
        colour: Array.isArray(p.colour) ? p.colour[0] : p.colour
    }));

    return { projects };
}