<script>
    import { projects } from './projects/projects.js';
    import ProjectGallery from '$lib/ProjectGallery.svelte';
    import MediaQuery from '$lib/MediaQuery.svelte';

    // "Newest" = first item in projects.js (assumes you keep the array
    // ordered newest → oldest, which you said is the mobile order).
    //
    // When you add a `year` field to each project, you can replace this with:
    //   const sorted = [...projects].sort((a, b) => b.year - a.year);
    //   const newest = sorted[0];
    //
    // For now, projects.js array order is the source of truth.
    const newest = projects[0];

    // Wrap-around prev/next for the navigation arrows on the project page.
    const prevSlug = projects[projects.length - 1].slug;
    const nextSlug = projects[1]?.slug ?? projects[0].slug;
</script>

<!-- Desktop has the cube in the layout, so this page only renders on mobile. -->
<MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
        <ProjectGallery
            project={newest}
            {prevSlug}
            {nextSlug}
        />
    {/if}
</MediaQuery>
