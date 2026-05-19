<script>
    import Radio from '$lib/layout/radio.svelte';
	import MediaQuery from '$lib/layout/mediaQuery.svelte';
    import { store } from '$lib/utils/store.js';

    // export const radioValue;

    const options = [{
        value: 'blueprints',
        label: 'Plans',
    }, {
        value: 'pictures',
        label: 'Images ',
    }];
</script>

<footer class="desktop">
    <address>
        Office MI—JI<br>
        Suite 01/156 George St <br>
        Fitzroy 3065
    </address>
    <nav>
        <a href="mailto:office@mi-ji.com.au">office@mi-ji.com.au</a><br>
    </nav>
    <span id="images">
        <MediaQuery query="(min-width: 800px)" let:matches>
            {#if matches}
                <a data-sveltekit-noscroll href="/about">About</a><br>
            {/if}
        </MediaQuery>
        <a data-sveltekit-noscroll href="https://instagram.com/office_mi.ji" target="none">Instagram</a><br>
    </span>
    <MediaQuery query="(min-width: 800px)" let:matches>
        {#if matches}
            <span id="abrv">
                <!-- <Radio {options} bind:userSelected={$store}/> -->
                <Radio {options} />
            </span>
        {/if}
    </MediaQuery>
</footer>

<style>
    a:hover {
        color: var(--green);
    }

    footer {
        position: fixed;
        display: flex;
        flex-flow: row wrap;
        align-items: end;
        bottom: 0;
        width: 100%;
        min-height: 80px;
        z-index: 0;
        /* background: white; */
        transition: 2s;
    }

    footer > * {
        width: 25%;
        padding: 10px;
        transition: 2s;
    }

    address { order: 1; }
    nav     { order: 2; }
    #images { order: 3; }
    #abrv   { order: 4; }

    @media only screen and (max-width: 1200px) {
        footer {
            width: 50%;
        }
        footer > * {
            width: 40%;
        }
    }

    @media only screen and (max-width: 1000px) {
        footer {
            width: 50%;
        }
        footer > * {
            width: 100%;
        }
    }

    @media only screen and (max-width: 800px) {
        footer {
            align-items: flex-start;
            position: fixed;
            bottom: 0;
            width: 50%;
            height: fit-content;
        }
        footer > * {
            width: 100%;
        }

        address { order: 1; }
        #images { order: 2; }
        nav     { order: 3; }
        #abrv   { order: 4; }
    }

    @media only screen and (max-width: 600px) {
        footer {
            align-items: flex-start;
            flex-direction: row;
            position: relative;
            width: 100%;
            height: fit-content;
        }
        footer > * {
            width: 100%;
            padding: unset;
        }

        address { order: 1; padding-top: 1em;}
        #images { order: 3; }
        nav     { order: 2; padding-top: 1em;}
        #abrv   { display: none; }   /* Radio toggle hidden on mobile (no cube to control) */
    }
</style>
