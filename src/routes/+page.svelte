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
            </span>
            <div class="pistachio sun">
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
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