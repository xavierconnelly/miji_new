
<script>
	// trying to get page transitions working
	import { fade } from 'svelte/transition';
	export let data
</script>

<!-- <div id="noscroll" >
	{#key data.url} 
		<article transition:fade>
			<slot />
		</article>
	{/key}
</div> -->

{#key data.url} 
	<div id="noscroll" transition:fade >
		<slot />
	</div>
{/key}


<style>
#noscroll {
	position: fixed;
	right: 0;
	top: 0;
	z-index:80;
	height: 90%;
	width: 100%;
	overflow: scroll;
}
</style>