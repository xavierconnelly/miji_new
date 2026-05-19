import { client } from '$lib/server/microcms';

export async function load() {
    const [awardsData, publicationsData, aboutData, contactsData] = await Promise.all([
        client.getList({ endpoint: 'awards', queries: { limit: 100, depth: 1 } }),
        client.getList({ endpoint: 'publications', queries: { limit: 100, depth: 1 } }),
        client.getObject({ endpoint: 'about' }),
        client.getList({ endpoint: 'contacts', queries: { limit: 100 } })
    ]);

    return {
        awards: awardsData.contents,
        publications: publicationsData.contents,
        about: aboutData,
        contacts: contactsData.contents
    };
}