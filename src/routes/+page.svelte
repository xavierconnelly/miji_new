<script>
    import ProjectGallery from '$lib/components/projectGallery.svelte';
    import MediaQuery from '$lib/layout/mediaQuery.svelte';

    export let data;
    const newest = data.projects[0];
    const prevSlug = data.projects[data.projects.length - 1].id;
    const nextSlug = data.projects[1]?.id ?? data.projects[0].id;

    const photos = newest.photos ?? [];
</script>

<svelte:head>
    {#if photos[0]}
        <link rel="preload" as="image" href={photos[0].url} fetchpriority="high">
    {/if}
    {#if photos[1]}
        <link rel="preload" as="image" href={photos[1].url}>
    {/if}
    {#if photos.length > 2}
        <link rel="preload" as="image" href={photos[photos.length - 1].url}>
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