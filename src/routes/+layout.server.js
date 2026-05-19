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

    // Newest first. year is a Text Field, so coerce to number for sorting.
    const sortedProjects = [...projects].sort((a, b) =>
        (Number(b.year) || 0) - (Number(a.year) || 0)
    );

    return { projects, sortedProjects };
}