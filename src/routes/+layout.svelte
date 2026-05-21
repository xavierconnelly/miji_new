<script>
    import '../app.css';

    import Header from '$lib/layout/header.svelte';
    import Swiper from '$lib/layout/swipe.svelte';
    import Footer from '$lib/layout/footer.svelte';
    import MediaQuery from '$lib/layout/mediaQuery.svelte';

    import { fade } from 'svelte/transition';

    export let data;
</script>

<Header />

<!-- The Swiper shows above 800px -->
<MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
        <main class="root tablet">
            <Swiper projects={data.desktopProjects} />
        </main>
        <Footer />
    {/if}
</MediaQuery>

<!-- The rest of everything -->
{#key data.url}
    <section transition:fade={{ duration: 1000 }} id="lost">
        <slot />
    </section>
{/key}

<style>
.root {
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
</style>
