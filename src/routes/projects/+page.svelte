<script>
	export let data;
</script>

<div id="projects">
	<h6>Projects</h6>
	<div>
		<!-- This pulls in data from the +page.server.js file -->
		{#each data.banana as { slug, title }}
			<a href="/projects/{slug}" data-sveltekit-noscroll>{title}</a><br>
		{/each}
	</div>

</div>

<style>
	#projects {
		z-index: 40;
		padding: 20px 20px 100px 20px;
		padding-bottom: 100px;
		width: 100%;
		position: absolute;
		bottom: 30px;
		background: rgba(255, 255, 255, 0.94);
		max-height: 100dvh;
    	min-height: 70dvh;
		overflow: scroll;
	}

	h6  {
		padding-bottom: 1em;
	}

	a {
		padding-top: 10px;
	}
</style>