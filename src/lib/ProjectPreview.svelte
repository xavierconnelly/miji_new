<script>
    import { projects } from '../routes/projects/projects.js';

    export let hovered = null;    // slug string, or null when nothing hovered
    export let label = null;      // optional display override

    $: project = hovered ? projects.find(p => p.slug === hovered) : null;
</script>

<aside class="preview {project?.slug ?? ''}" class:visible={!!project}>
    {#if project}
        <h6>{label ?? project.title}</h6>
        <img src="../images/{project.slug}/{project.images[0]}_800.webp" alt={project.title}>
    {/if}
</aside>

<style>
    .preview {
        width: calc(25% - 40px);
        position: fixed;
        left: 0;
        top: 30px;
        padding: 0 0 10px 10px;
        margin-top: 22px;
        margin-right: 50px;
        opacity: 0;
        transition: opacity 0.5s;
        background: white;
        z-index: -99;
        height: 100%;
    }

    .preview.visible {
        opacity: 1;
        z-index: 99;
    }

    .preview img {
        width: 80%;
        margin: 0 auto;
        opacity: 0;
        transition: opacity 2s;
    }

    .preview.visible img {
        opacity: 1;
    }

    @media only screen and (max-width: 800px) {
        .preview { display: none; }
    }
</style>
