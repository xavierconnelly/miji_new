<script>
	import MediaQuery from '../lib/MediaQuery.svelte';
	import '../app.css'

	// trying to get page transitions working
	import { fade } from 'svelte/transition';
	import HeaderMobile from '../lib/headerMobile.svelte';
</script>

<MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
        <HeaderMobile/>
        <article transition:fade={{ duration: 2 }}>
            <span class="pink ACourtyardHouse" id="display">
                <img src="../images/ACourtyardHouse/01_800.webp" alt="ACourtyardHouse project">
                <img src="../images/ACourtyardHouse/02_800.webp" alt="ACourtyardHouse project">
                <img src="../images/ACourtyardHouse/03_800.webp" alt="ACourtyardHouse project">
                <img src="../images/ACourtyardHouse/04_800.webp" alt="ACourtyardHouse project">
                <img src="../images/ACourtyardHouse/05_800.webp" alt="ACourtyardHouse project">
                <img src="../images/ACourtyardHouse/06_800.webp" alt="ACourtyardHouse project">
                <img class="plan" src="../images/ACourtyardHouse/Plan_01_800.svg" alt="ACourtyardHouse">
                <img class="plan" src="../images/ACourtyardHouse/Plan_02_800.svg" alt="ACourtyardHouse">
                <div class="buttons ACourtyardHouse">
                    <a href="/projects/TokyoTina" data-sveltekit-scroll>
                        <img id="prev" class="arrow" src="/prev/pink.svg" alt="prev button">
                    </a>
                    <a href="/projects/ABHouse" data-sveltekit-scroll>
                        <img id="next" class="arrow" src="/next/pink.svg" alt="prev button">
                    </a>
                </div>
            </span>
            <div class="pink sun">
                A Courtyard House - Brighton | Bunurong Country, Australia 2024
            </div>
        </article>
    {/if}
</MediaQuery>

<style>
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

#display {
    margin-bottom: 100px;
}

img {
    width: 100%;
    display: block;
    display: flex;
    flex-direction: column;
}
.plan {
    background-color: rgb(255, 255, 255)
}

div {
    padding: 10px;
    /* display: block; */
    /* display: flex; */
    text-align: left;
    min-height: 65px;
    width: 40%;
    position: fixed;
    bottom: 0px;
}

.pink img {
    cursor: url(/close/pink.svg), crosshair;
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
    div {
        width: 100%
    }
    article {
        width: 50%;
		height: 100%;
		flex-direction: column;
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
    article {
        width: 100%;
		height: calc(100% - 140px);
		top: 30px;
		flex-direction: row;
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
    article {
        width: 100%;
		height: unset;
		flex-direction: column;
		height: 100%;
		overflow: scroll;
    }
}
  </style>
