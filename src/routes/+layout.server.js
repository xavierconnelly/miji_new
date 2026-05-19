import { client } from '$lib/server/microcms';

export async function load() {
    const { contents } = await client.getList({
        endpoint: 'projects',
        queries: { limit: 100 }
    });

    const projects = contents.map(p => ({
        ...p,
        colour: Array.isArray(p.colour) ? p.colour[0] : p.colour
    }));

    return { projects };
}