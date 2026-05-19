<script>
    import ProjectGallery from '$lib/components/projectGallery.svelte';
    import MediaQuery from '$lib/layout/mediaQuery.svelte';

    export let data;
    const newest = data.sortedProjects[0];
    const prevSlug = data.sortedProjects[data.sortedProjects.length - 1].id;
    const nextSlug = data.sortedProjects[1]?.id ?? data.sortedProjects[0].id;

    const photos = newest.photos ?? [];
</script>

<svelte:head>
    {#if photos[0]}
        <link
            rel="preload"
            as="image"
            href="{photos[0].url}?w=800&fm=webp&q=80"
            imagesrcset="
                {photos[0].url}?w=400&fm=webp&q=80 400w,
                {photos[0].url}?w=800&fm=webp&q=80 800w,
                {photos[0].url}?w=1200&fm=webp&q=80 1200w
            "
            imagesizes="(max-width: 600px) 100vw, (max-width: 800px) 50vw, 40vw"
            fetchpriority="high"
        >
    {/if}
</svelte:head>

<MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
        <ProjectGallery
            project={newest}
            {prevSlug}
            {nextSlug}
        />
    {/if}
</MediaQuery>