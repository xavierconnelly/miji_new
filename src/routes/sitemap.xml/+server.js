import { client } from '$lib/server/microcms';

export const prerender = true;

const site = 'https://mi-ji.com.au';

export async function GET() {
    const { contents } = await client.getList({
        endpoint: 'projects',
        queries: { limit: 100, fields: 'id,updatedAt' }
    });

    const urls = [
        { loc: `${site}/` },
        { loc: `${site}/about` },
        ...contents.map(p => ({
            loc: `${site}/projects/${p.id.toLowerCase()}`,
            lastmod: p.updatedAt?.slice(0, 10)
        }))
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: { 'Content-Type': 'application/xml' }
    });
}