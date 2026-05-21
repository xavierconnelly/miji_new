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

    // Desktop horizontal order — 1 = left, 100 = right
    const desktopProjects = [...projects].sort((a, b) =>
        (Number(a.desktopOrder) || 999) - (Number(b.desktopOrder) || 999)
    );

    return { projects, desktopProjects };
}