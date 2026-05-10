<script>
	import { projects } from '../routes/projects/projects.js'
</script>

<div id="projects">
	<h6>Projects</h6>
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

h6 {
	padding-bottom: 1em;
	border-bottom: 1px solid;
	margin-bottom: 1em
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