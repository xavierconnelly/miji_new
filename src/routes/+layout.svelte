<script>
	import Header from '../lib/header.svelte'
	import Swiper from '../lib/swiperCUBElooped.svelte'
	import Footer from '../lib/footer.svelte'
	import MediaQuery from '../lib/MediaQuery.svelte';
	import '../app.css'
	

	// trying to get page transitions working
	import { fade } from 'svelte/transition';
	import About from '$lib/about.svelte';
    import Awards from '../lib/awards.svelte';
	import Projects from '../lib/projects.svelte';
    import Publications from '../lib/publications.svelte';
	export let data;

	let view = 'closed';
</script>

<MediaQuery query="(min-width: 800px)" let:matches>
	{#if matches}
		<Header/>
	{:else}
		<button	on:click="{() => view = 'home'}"
				on:keydown="{() => view = 'home'}"
				class:show="{view === 'closed'}"
				>
				<Header/>
		</button>
		<button	on:click="{() => view = 'closed'}"
				on:keydown="{() => view = 'closed'}"
			>
			<Header/>
		</button>	
	{/if}
  </MediaQuery>

<!-- <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches> -->
<MediaQuery query="(min-width: 800px)" let:matches>
  	{#if matches}
		<div class="root tablet">
			<Swiper/>
		</div>
	{:else}
		<div class="home"
			class:selected="{view === 'home'}"
				on:click="{() => view = 'home'}"
				on:keydown="{() => view = 'home'}">
			<img src="../src/lib/images/ABHouse/01_800.webp" alt="">
			<About />
			<Projects/>
			<Awards />
			<Publications/>
		</div>
	{/if}
</MediaQuery>

{#key data.url} 
	<div transition:fade>
		<slot />
	</div>
{/key}

<Footer/>

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
	.home {
		padding: 10px;
		position: fixed;
		top: 30px;
		z-index: 90;
		background: rgba(255,255,255,0.9);
		overflow: scroll;
		height: 100%;
		transition: 1s;
	}
	.selected {
		z-index: 90;
		height: 0%;
		padding: 0 10px;
		transition: 1s;
	}
	
	.show {
		display: block;
	}
	.show + div {
		display: none;
	}
	img {
		width: 60%;
		padding: 2em 0;
	}
	/* .default {
		background-color: white;
	}
	.tablet {
		background-color: antiquewhite;
	}
	.mobile {
		background-color: gold;
	} */
</style>