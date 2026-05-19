import { error } from '@sveltejs/kit';
import { client } from '$lib/server/microcms';

export async function load({ params, parent }) {
    const { sortedProjects } = await parent();
    const index = sortedProjects.findIndex(p => p.id === params.slug);

    if (index === -1) throw error(404, 'Project not found');

    return {
        project: sortedProjects[index],
        prevSlug: sortedProjects[(index - 1 + sortedProjects.length) % sortedProjects.length].id,
        nextSlug: sortedProjects[(index + 1) % sortedProjects.length].id
    };
}

export async function entries() {
    const { contents } = await client.getList({
        endpoint: 'projects',
        queries: { limit: 100, fields: 'id' }
    });
    return contents.map(p => ({ slug: p.id }));
}