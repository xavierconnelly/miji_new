<script>
	export let data;

    import MediaQuery from '/src/lib/MediaQuery.svelte';
    import HeaderMobile from '/src/lib/headerMobile.svelte';
</script>


<MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
    <HeaderMobile/>
    {/if}
</MediaQuery>

<article class="{data.project.colour}">
    <MediaQuery query="(min-width: 800px)" let:matches>
        {#if matches}
            <a href="/" class="{data.project.colour} {data.project.slug}"  data-sveltekit-noscroll id="display">
                <!-- Images -->
                {#each data.project.images as  i}
                    <img src="../images/{data.project.slug}/{i}_800.webp" alt="{data.project.title} project">
                {/each}
                <!-- Plans -->
                {#each data.project.plans as  i}
                    <img class="plan" src="../images/{data.project.slug}/Plan_{i}_800.svg" alt="{data.project.title}">
                {/each}
            </a>

        {:else} 

        <!-- <HeaderMobile/> -->
        <span class="{data.project.colour} {data.project.slug}" id="display">
            <!-- Images -->
            {#each data.project.images as  i}
                <img src="../images/{data.project.slug}/{i}_800.webp" alt="{data.project.title} project">
            {/each}
            <!-- Plans -->
            {#each data.project.plans as  i}
                <img class="plan" src="../images/{data.project.slug}/Plan_{i}_800.svg" alt="{data.project.title}">
            {/each}
        </span>
      {/if}
  </MediaQuery>

    <!-- Buttons -->
    <div class="buttons">
        <a href="/projects/{data.project.prev}" data-sveltekit-scroll>
            <img id="prev" class="arrow" src="/prev/{data.project.colour}.svg" alt="prev button">
        </a>
        <a href="/projects/{data.project.next}" data-sveltekit-scroll>
            <img id="next" class="arrow" src="/next/{data.project.colour}.svg" alt="next button">
        </a>
    </div>

    <caption class="{data.project.colour} sun">
        <h2>{data.project.title}</h2> &nbsp-&nbsp 
        <p>
        {@html data.project.content} 
        </p>
    </caption>
</article>

<a 	data-sveltekit-noscroll 
    class="white" 
    href="/"
	style="	background: white;
            height: calc(100% - 110px);
            width: 60%;
            z-index: -5;
            opacity: 0.8;
            transition: all 2s ease 0s;
            position: fixed;
            top: 30px;
            left: 0;">
</a>


<style>

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

caption  * {
    /* float: left; */
    display: contents;
}

.buttons {display: block;}
/* .ABHouse ~ .ABHouse {display: block;} */
/* .AHouseForOne ~ .AHouseForOne {display: block;}
.APavilion ~ .APavilion {display: block;}
.ACertainKindofLife ~ .ACertainKindofLife {display: block;}
.FourVisitsTo52Posts ~ .FourVisitsTo52Posts {display: block;}
.TokyoTina ~ .TokyoTina {display: block;}
.ARenovationForThree ~ .ARenovationForThree {display: block;} */

.green img,
.green ~ .white  {
    cursor: url(/close/green.svg), crosshair;
}
.yellow img,
.yellow ~ .white {
    cursor: url(/close/yellow.svg), crosshair;
}
.pink img,
.pink ~ .white {
    cursor: url(/close/pink.svg), crosshair;
}
.red img,
.red ~ .white  {
    cursor: url(/close/red.svg), crosshair;
}
.grey img,
.grey ~ .white  {
    cursor: url(/close/grey.svg), crosshair;
}
.pistachio img,
.pistachio ~ .white  {
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
    /* .arrow {
        display: block;
    } */
    /*
    img {
        width: unset;
        height: 100%;
    } */
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

/* @media only screen and (max-height: 800px) {
    article {
        width: 100%;
		height: calc(100% - 140px);
		top: 30px;
		flex-direction: row;
    }
} */

@media only screen and (max-width: 600px) {
    article {
        width: 100%;
		/* height: unset; */
		flex-direction: column;
		height: 100%;
		overflow: scroll;
    }
}
</style>
