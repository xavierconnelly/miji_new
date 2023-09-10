<script>
    //importing the sections
    import About from '$lib/about.svelte';
	import Award from '$lib/awards.svelte';
    import Publications from '$lib/publications.svelte';
</script>

<div id="about" class="flex">
    <span id="info">
        <About />
    </span>
    <span id="accolades">
        <Award />
        <Publications />
    </span>
</div>
<!--
    Used to create the background effect
    Don't think this is the best way but it's what's working for now
-->
<!-- <a 	data-sveltekit-noscroll 
    class="white" 
    href="/"
	style="	background: white;
            height: calc(100% - 80px);
            width: 100%;
            z-index: 15;
            opacity: 0.8;
            transition: all 2s ease 0s;
            position: fixed;
            top: 30px;
            left: 0;">
</a> -->

<style>

/* #about ~ .white {
    cursor: url(../close/green.svg), crosshair;
} */

#about {
    background: rgba(255, 255, 255, 0.94);
    position: fixed;
    top: 0;
    padding: 40px 0px 100px 0px;
    z-index: 40;
    overflow: scroll;
    width: 100%;
    height: calc(100dvh - 80px);   
}

.flex {
    flex-direction: row;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.flex > span {
    flex-grow: 1;
    padding: 10px 10px 10px 10px;
    text-align: left;
    height: 100%;
    /* overflow: scroll; */
}

#info {
    width: 25%;
    padding: 10px 40px 10px 10px;

}

#accolades {
    width: 75%;
}

@media only screen and (max-width: 800px) {
    .flex > span {
        width: 100%
    }
}
/* @media only screen and (max-height: 800px) {
    #about {
        max-height: 60dvh;
    }
} */
</style>