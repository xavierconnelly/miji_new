<script>
    import ProjectGallery from '$lib/components/ProjectGallery.svelte';

    export let data;
</script>

<ProjectGallery
    project={data.project}
    prevSlug={data.project.prev}
    nextSlug={data.project.next}
    closeable={true}
/>
