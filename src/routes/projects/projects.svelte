<script>
	import { projects } from './projects.js'
</script>

<div id="projects">
	<h5>Projects</h5>
	{#each projects as { title, slug}}
        <a href="/projects/{slug}" data-sveltekit-noscroll class="{slug} row">
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