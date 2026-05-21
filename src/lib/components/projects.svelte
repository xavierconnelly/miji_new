<script>
	import { page } from '$app/stores';
	$: projects = $page.data.projects;
</script>

<div id="projects">
	<h5>Projects</h5>
	{#each projects as { title, id }}
        <a href="/projects/{id}" data-sveltekit-noscroll class="{id} row">
            {title}
        </a>
	{/each}
</div>

<style>
#projects {
    padding-top: 60px;
	width: calc(100% - 0px);
	float: right;
}

.title {
	padding-bottom: 1em;
}

.row {
	display: flex;
	width: calc(100%);
	line-height: 130%;
}

a:hover {
	color: var(--green);
}
</style>