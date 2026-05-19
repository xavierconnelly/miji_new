<script>
    import ProjectGallery from '$lib/components/projectGallery.svelte';
    import MediaQuery from '$lib/layout/mediaQuery.svelte';

    export let data;

    // First in microCMS dashboard order = "newest"
    const newest = data.projects[0];
    const prevSlug = data.projects[data.projects.length - 1].id;
    const nextSlug = data.projects[1]?.id ?? data.projects[0].id;
</script>

<MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
        <ProjectGallery
            project={newest}
            {prevSlug}
            {nextSlug}
        />
    {/if}
</MediaQuery>