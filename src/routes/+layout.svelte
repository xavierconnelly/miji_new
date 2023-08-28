<script>
	import Header from '../lib/header.svelte';
	import HeaderMobile from '../lib/headerMobile.svelte';
	import Swiper from '../lib/swiperCUBElooped.svelte';
	import Footer from '../lib/footer.svelte';
	import MediaQuery from '../lib/MediaQuery.svelte';
	import '../app.css'
	

	// trying to get page transitions working
	import { fade } from 'svelte/transition';

	// import About from '$lib/about.svelte';
    // import Awards from '../lib/awards.svelte';
	// import Projects from '../lib/projects.svelte';
    // import Publications from '../lib/publications.svelte';
	export let data;

	// let view = 'closed';

</script>

<MediaQuery query="(min-width: 800px)" let:matches>
	{#if matches}
		<Header/>
	{:else}
	<HeaderMobile/>

		<!-- <button	on:click="{() => view = 'home'}"
				on:keydown="{() => view = 'home'}"
				class:show="{view === 'closed'}"
				>
				<Header/>
		</button>
		<button	on:click="{() => view = 'closed'}"
				on:keydown="{() => view = 'closed'}"
			>
			<HeaderMobile/>
		</button>	 -->
		<!-- {#if images.selected}
			<button on:click={toggle}> Log out {$selected} </button>
		{:else}
			<button on:click={toggle}> Log in {$selected}</button>
		{/if} -->
	{/if}
  </MediaQuery>

  <MediaQuery query="(min-width: 800px)" let:matches>
	{#if matches}
	  <div class="root tablet">
		  <Swiper/>
	  </div>
	{/if}
  </MediaQuery>

{#key data.url} 
	<div transition:fade id="lost">
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