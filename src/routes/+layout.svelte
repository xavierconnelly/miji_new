<script>
	import Header from '../lib/header.svelte';
	// import HeaderMobile from '../lib/headerMobile.svelte';
	import Swiper from '../lib/swiperCUBElooped.svelte';
	import Footer from '../lib/footer.svelte';
	import MediaQuery from '../lib/MediaQuery.svelte';
	import '../app.css'
	
	// trying to get page transitions working
	import { fade } from 'svelte/transition';

	export let data;
</script>


<MediaQuery query="(min-width: 800px)" let:matches>
	{#if matches}
		<Header/>
	<!-- {:else}
		<HeaderMobile/> -->
	{/if}s
</MediaQuery>

  <MediaQuery query="(min-width: 800px)" let:matches>
	{#if matches}
	  <div class="root tablet">
		  <Swiper/>
	  </div>
	{/if}
  </MediaQuery>

{#key data.url} 
	<div transition:fade={{ duration: 1000 }} id="lost">
		<slot />
	</div>
{/key}

<MediaQuery query="(min-width: 800px)" let:matches>
	{#if matches}
	  <div class="root tablet">
		<Footer/>
	  </div>
  {/if}
</MediaQuery>
<style>
.root {
	/* position: fixed; */
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	/* padding: 1em;
	display: flex;
	align-items: center;
	justify-content: center; */
}
</style>