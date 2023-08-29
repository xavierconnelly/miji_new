<script>
    import * as config from '$lib/config';

    import About from '$lib/about.svelte';
    import Awards from '../lib/awards.svelte';
    import Projects from '../lib/projects.svelte';
    import Publications from '../lib/publications.svelte';

    let images = { selected: false };
    // let images;
    function toggle() {
      images.selected = !images.selected;
    }
</script>

<header>
  <button on:click={toggle}> 
    <h1>
      {config.description}
    </h1>
    <img src="/miji.svg" alt="Mi-Ji logo">
  </button>
</header>

{#if images.selected}
  <div class="home">
    <img src="../images/ABHouse/01_800.webp" alt="">
    <About />
    <Projects/>
    <Awards />
    <Publications/>
  </div>
{/if}


<!--
<header>
  <a href="/" data-sveltekit-noscroll>
    {config.description}
  </a>
  <h1>
    {config.description}
  </h1>
  <img src="/miji.svg" alt="Mi-Ji logo">
</header> 
-->
<style>

h1 {
  display: contents;
}

header {
  height: 30px;
  width: 100%;
  padding: 1px 10px; 
  background: white;
  position: fixed;
  top: 0;
  z-index: 100;
  line-height: 30px;
}

header img {
  float: right;
  height: 100%;
  padding: 5px;
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

div img {
		width: 60%;
		padding: 2em 0;
	}

.selected {
  z-index: 90;
  height: 0%;
  padding: 0 10px;
  transition: 1s;
}
</style>
