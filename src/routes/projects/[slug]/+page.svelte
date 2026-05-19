<script>
    import ProjectGallery from '$lib/components/projectGallery.svelte';
    export let data;
</script>

<ProjectGallery
    project={data.project}
    prevSlug={data.prevSlug}
    nextSlug={data.nextSlug}
    closeable={true}
/>