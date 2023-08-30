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

  <div class="dropdown">
    <About />
    <br>
    <address>
      Office MI—JI<br>
      Suite 01/156 George St <br>
      Fitzroy 3065
  </address>
<br>
      <a href="mailto:office@mi-ji.com.au">office@mi-ji.com.au</a><br>

    <a data-sveltekit-noscroll href="https://instagram.com/office_mi.ji" target="none">Instagram</a><br>
    <Projects/>
    <Awards />
    <Publications/>
  </div>

  <button on:click={toggle} id="exit"> Back</button>
{/if}

<style>

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

button {
    /* display: contents; */
    border: none;
    text-align: left;
    color: unset;
    line-height: inherit;
    width: 100%;
}

#exit {
  position: fixed;
    bottom: 0;
    height: 65px;
    background-color: white;
    border-top: 1px solid;
    z-index: 100;
    text-align: center;

}

h1 {
  display: inline;
  float: left;
}

header img {
  /* float: right; */
  height: 100%;
  padding: 5px;
  position: absolute;
  right: 10px;
}

.dropdown {
		padding: 10px;
		position: fixed;
		top: 30px;
		z-index: 90;
		background: rgba(255,255,255,0.9);
		overflow: scroll;
		height: 100%;
		transition: 1s;
}

/* .selected {
  z-index: 90;
  height: 0%;
  padding: 0 10px;
  transition: 1s;
} */
</style>
