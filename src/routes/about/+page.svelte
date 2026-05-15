<script>
    import Bio from './bio.svelte';
    import Award from './awards/awards.svelte';
    import Publications from './publications/publications.svelte';
    import Projects from '../projects/projects.svelte';
	import MediaQuery from '$lib/MediaQuery.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<div id="about">
    <span id="info">
        <Bio />
        <MediaQuery query="(max-width: 800px)" let:matches>
            {#if matches}
                <Footer />
                <Projects />
            {/if}
        </MediaQuery>
    </span>
    <span id="accolades">
        <Award />
        <Publications />
    </span>
    <a id="close" href="/">Back</a>
</div>

<style>
    #about {
        background: rgba(255, 255, 255, 0.94);
        position: fixed;
        top: 0;
        padding: 40px 0px 100px 0px;
        z-index: 40;
        overflow: scroll;
        width: 100%;
        height: calc(100dvh - 80px);
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
    }

    #accolades {
        width: 75%;
    }

    #close {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 65px;
        line-height: 65px;
        border-top: 1px solid;
        text-align: center;
        background-color: white;
        z-index: 50;
    }

    @media only screen and (max-width: 800px) {
        #info {
            width: 100%;
        }
        #about {
            display: block;
            padding: 10px;
        }
        #about > span {
            width: 100%;
        }
    }
</style>
