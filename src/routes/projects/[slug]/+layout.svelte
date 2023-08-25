
<script>
	// trying to get page transitions working
	import { fade } from 'svelte/transition';
	export let data
</script>

<div id="noscroll">
	{#key data.url} 
		<article transition:fade>
			<slot />
		</article>
	{/key}
</div>


<!-- <div 	class="white" 
		style="	background: white;
				height: 100%;
				width: 100%;
				z-index: 40;
				opacity: 0.8;
				transition: 2s;
				position: fixed;
				top:0">
</div> -->

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

.green img:hover {
    cursor: url(../src/lib/close/green.svg), crosshair;
}
.yellow img:hover {
    cursor: url(../src/lib/close/yellow.svg), crosshair;
}
.pink img:hover {
    cursor: url(../src/lib/close/pink.svg), crosshair;
}
.red img:hover {
    cursor: url(../src/lib/close/red.svg), crosshair;
}
.grey img:hover {
    cursor: url(../src/lib/close/grey.svg), crosshair;
}
.pistachio img:hover {
    cursor: url(../src/lib/close/pistachio.svg), crosshair;
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
</style>