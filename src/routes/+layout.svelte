<script>
    import Header from '../lib/header.svelte';
    import Swiper from '../lib/swipe.svelte';
    import Footer from '../lib/footer.svelte';
    import MediaQuery from '../lib/MediaQuery.svelte';
    import '../app.css';

    import { fade } from 'svelte/transition';

    export let data;
</script>

<Header />

<MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
        <div class="root tablet">
            <Swiper />
        </div>
    {/if}
</MediaQuery>

{#key data.url}
    <div transition:fade={{ duration: 1000 }} id="lost">
        <slot />
    </div>
{/key}

<MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
        <Footer />
    {/if}
</MediaQuery>



<style>
    .root {
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
</style>
