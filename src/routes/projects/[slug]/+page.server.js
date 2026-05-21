import { error } from '@sveltejs/kit';
import { client } from '$lib/server/microcms';

export async function load({ params, parent }) {
    const { projects } = await parent();
    const index = projects.findIndex(p => p.id === params.slug);

    if (index === -1) throw error(404, 'Project not found');

    return {
        project: projects[index],
        prevSlug: projects[(index - 1 + projects.length) % projects.length].id,
        nextSlug: projects[(index + 1) % projects.length].id
    };
}

export async function entries() {
    const { contents } = await client.getList({
        endpoint: 'projects',
        queries: { limit: 100, fields: 'id' }
    });
    return contents.map(p => ({ slug: p.id }));
}