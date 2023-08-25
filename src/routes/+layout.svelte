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

<!-- <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches> -->
<MediaQuery query="(min-width: 800px)" let:matches>
  	{#if matches}
		<div class="root tablet">
			<Swiper/>
		</div>
	{:else}
		<div id="noscroll">
			<article transition:fade>
				<span class="pistachio ABHouse" id="display">
					<img src="../images/ABHouse/01_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/02_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/03_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/04_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/05_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/06_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/07_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/08_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/09_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/10_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/11_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/12_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/13_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/14_800.webp" alt="ABHouse project">
					<img src="../images/ABHouse/15_800.webp" alt="ABHouse project">
					<img class="plan" src="../images/ABHouse/Plan_01_800.svg" alt="ABHouse">
					<img class="plan" src="../images/ABHouse/Plan_02_800.svg" alt="ABHouse">
					<div class="buttons ABHouse">
						<a href="/projects/TokyoTina" data-sveltekit-scroll>
							<img id="prev" class="arrow" src="/prev/pistachio.svg" alt="prev button">
						</a>
						<a href="/projects/APavilion" data-sveltekit-scroll>
							<img id="next" class="arrow" src="/next/pistachio.svg" alt="prev button">
						</a>
					</div>
					<caption class="pistachio sun">
						<h2>AB House</h2> &nbsp-&nbsp 
						<p>
							Wadawurrung Country | Barwon Heads, Australia 2021
						</p> 
						<span>
							
						</span>
					</caption>
				</span>
			</article>
		</div>
		<!-- <div class="home"
			class:selected="{view === 'home'}"
				on:click="{() => view = 'home'}"
				on:keydown="{() => view = 'home'}">
			<img src="../src/lib/images/ABHouse/01_800.webp" alt="">
			<About />
			<Projects/>
			<Awards />
			<Publications/>
		</div> -->
	{/if}
</MediaQuery>

{#key data.url} 
	<div transition:fade>
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
	/* img {
		width: 60%;
		padding: 2em 0;
	} */
	/* .default {
		background-color: white;
	}
	.tablet {
		background-color: antiquewhite;
	}
	.mobile {
		background-color: gold;
	} */


article {
	position: fixed;
	right: 0;
	top: 30px;
	z-index: 50;
	/* width: 600px; */
	width: 40%;
	height: 100%;
	overflow: scroll;
	display: flex;
	flex-direction: column;
	transition: 1s;
	overscroll-behavior: contain;
}

@media only screen and (max-width: 800px) {
    article {
        width: 50%;
		height: 100%;
		flex-direction: column;
    }
}

@media only screen and (max-height: 800px) {
    article {
        width: 100%;
		height: calc(100% - 140px);
		top: 30px;
		flex-direction: row;
    }
}

@media only screen and (max-width: 600px) {
    article {
        width: 100%;
		height: unset;
		flex-direction: column;
		height: 100%;
		overflow: scroll;
    }
}


#display {
        margin-bottom: 100px;
    }

    /* .pink ~ .sun {
        background: var(--pink);
    }
    .green ~ .sun {
        background: var(--green);
    }
    .red ~ .sun {
        background: var(--red);
    }
    .pistachio ~ .sun {
        background: var(--pistachio);
    }
    .yellow ~ .sun {
        background: var(--yellow);
    }
    .grey {
        background: var(--grey);
    } */

img {
    width: 100%;
    display: block;
    display: flex;
    flex-direction: column;
}
.plan {
    background-color: rgb(255, 255, 255)
}
/* caption {
    padding: 10px;
    /* display: block; */
    /* display: flex;
    text-align: left;
    min-height: 45px;
    width: 100%;
} */ 
/* .moon {
    background: white;
    color: #fff;
    user-select: none;
    position: relative;
} */
/* .sun {
    position: fixed;
    bottom: 0px;
} */

caption {
    padding: 10px;
    /* display: block; */
    /* display: flex; */
    text-align: left;
    min-height: 65px;
    width: 40%;
    position: fixed;
    bottom: 0px;
}

caption span {
    width: 100%;
}

/* caption * {
    display: contents;
} */

caption  * {
    /* float: left; */
    display: contents;
}



.pistachio img {
    cursor: url(/close/pistachio.svg), crosshair;
}


.arrow {
    z-index: 60;
    width: 70px;
    padding: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    height: auto;
    cursor: pointer;
    position: fixed;
}

#next {
    right: 0;
}

#prev {
    left: 0;
}


@media only screen and (max-width: 800px) {
    img {
        width: unset;
        height: 100%;
    }
    caption {
        width: 100%
    }
}

@media only screen and (max-height: 800px) {
    /* .sun {
        bottom: 65px;
    } */
    .arrow {
        display: block;
    }
    img {
        width: unset;
        height: 100%;
    }
}

@media only screen and (max-width: 600px) {
    .arrow {
        display: block;
    }
    img {
        width: 100%;
        height: unset;
    }
}
</style>