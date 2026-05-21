<script>
    import Bio from '$lib/components/bio.svelte';
    import Awards from '$lib/components/awards.svelte';
    import Publications from '$lib/components/publications.svelte';
    import Projects from '$lib/components/projects.svelte';
    
	import MediaQuery from '$lib/layout/mediaQuery.svelte';
	import Footer from '$lib/layout/footer.svelte';

    export let data;
</script>

<div id="about">
    <span id="info">
        <Bio bio={data.about.bio} contacts={data.contacts} />
        <MediaQuery query="(max-width: 800px)" let:matches>
            {#if matches}
                <Footer />
                <Projects />
            {/if}
        </MediaQuery>
    </span>
    <span id="accolades">
        <Awards awards={data.awards} />
        <Publications publications={data.publications} />
    </span>
    <a id="close" href="/">Back</a>
</div>

<style>

/* :global(#about:has(a.row:hover)) {
    --bio-opacity: 0;
} */

#about {
    background: rgba(255, 255, 255, 0.90);
    position: fixed;
    top: 0;
    padding: 40px 0px 100px 0px;
    z-index: 20;
    overflow: scroll;
    width: 100%;
    height: calc(100dvh - 65px);
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
}

#about > span {
    flex-grow: 1;
    padding: 10px;
    text-align: left;
    height: 100%;
}

#info {
    width: 25%;
    padding: 10px 40px 10px 10px;
    opacity: var(--bio-opacity, 1);
    transition: opacity 0.3s;
}

#accolades {
    width: 75%;
}

#close {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 65px;
    line-height: 65px;
    border-top: 1px solid;
    text-align: center;
    background-color: white;
    color: black;
    z-index: 90;
}

@media only screen and (max-width: 800px) {
    #info {
        width: 100%;
    }
    #about {
        display: block;
        padding: 10px;
        padding-top: 50px;
    }
    #about > span {
        width: 100%;
    }
}
</style>
