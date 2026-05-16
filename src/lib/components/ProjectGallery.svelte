<!--
    ProjectGallery — renders a single project's images, plans, prev/next
    buttons and caption. Used by both the homepage (mobile, showing newest
    project) and [slug]/+page.svelte (any project URL).

    Props:
      project   — the project object from projects.js
      prevSlug  — slug to navigate to for "previous"
      nextSlug  — slug to navigate to for "next"
      closeable — when true, desktop images become a link to "/" and a
                  white backdrop appears (click-outside-to-close pattern).
                  Used on [slug] pages, not on the homepage.
-->
<script>
    import MediaQuery from '$lib/layout/MediaQuery.svelte';

    export let project;
    export let prevSlug;
    export let nextSlug;
    export let closeable = false;
</script>

<article class={project.colour}>
    <MediaQuery query="(min-width: 800px)" let:matches>
        {#if matches}
            <svelte:element
                this={closeable ? 'a' : 'div'}
                href={closeable ? '/' : undefined}
                data-sveltekit-noscroll
                class="display"
            >
                {#each project.images as i}
                    <!-- <img src="/images/{project.slug}/{i}_800.webp"
                         alt={project.title}
                         loading="lazy" /> -->
                    <img 
                    src="/images/{project.slug}/{i}_800.webp"
                    srcset="/images/{project.slug}/{i}_400.webp 400w, /images/{project.slug}/{i}_800.webp 800w"
                    sizes="(max-width: 600px) 100vw, (max-width: 800px) 50vw, 400px"
                    alt={project.title}
                    />                    
                {/each}
                {#each project.plans as i}
                    <img class="plan"
                         src="/images/{project.slug}/Plan_{i}_800.svg"
                         loading="lazy"
                         alt={project.title}>
                {/each}
            </svelte:element>
        {:else}
            <span class="display">
                {#each project.images as i}
                    <img src="/images/{project.slug}/{i}_400.webp"
                         loading="lazy"
                         alt={project.title}
                         width="800"
                         height="1200">
                {/each}
                {#each project.plans as i}
                    <img class="plan"
                         src="/images/{project.slug}/Plan_{i}_800.svg"
                         loading="lazy"
                         alt={project.title}>
                {/each}
            </span>
        {/if}
    </MediaQuery>

    <div class="buttons">
        <a href="/projects/{prevSlug}" data-sveltekit-scroll>
            <img id="prev" class="arrow" src="/prev/{project.colour}.svg" alt="previous project">
        </a>
        <a href="/projects/{nextSlug}" data-sveltekit-scroll>
            <img id="next" class="arrow" src="/next/{project.colour}.svg" alt="next project">
        </a>
    </div>

    <div id="sun" class={project.colour}>
        <h2>{project.title}</h2> &nbsp;-&nbsp;
        <p>{@html project.content}</p>
    </div>
</article>

{#if closeable}
    <MediaQuery query="(min-width: 800px)" let:matches>
        {#if matches}
            <a data-sveltekit-noscroll class="white {project.colour}" href="/" aria-label="Close project"></a>
        {/if}
    </MediaQuery>
{/if}

<style>
    article {
        position: fixed;
        right: 0;
        top: 30px;
        z-index: 50;
        width: 40%;
        height: 100%;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        transition: 1s;
        overscroll-behavior: contain;
    }

    .display {
        margin-bottom: 100px;
    }

    img {
        width: 100%;
        display: block;
    }

    .plan {
        background-color: white;
    }

    #sun {
        padding: 10px;
        text-align: left;
        min-height: 65px;
        width: 40%;
        position: fixed;
        bottom: 0;
    }

    #sun * {
        display: contents;
    }

    /* White backdrop for the close mechanism (desktop only, [slug] page) */
    .white {
        background: white;
        height: calc(100% - 110px);
        width: 60%;
        z-index: -5;
        opacity: 0.8;
        transition: all 2s ease 0s;
        position: fixed;
        top: 30px;
        left: 0;
    }

    /* Project-colour cursors — for both project images and the white backdrop.
       (.white element has both `.white` and the colour class, so `.green.white`
       targets the green-coloured backdrop.) */
    :is(.green, .yellow, .pink, .red, .grey, .pistachio) img,
    .white { cursor: var(--close), crosshair; }
    
    /* .green     { --close: url(/close/green.svg); }
    .yellow    { --close: url(/close/yellow.svg); }
    .pink      { --close: url(/close/pink.svg); }
    .red       { --close: url(/close/red.svg); }
    .grey      { --close: url(/close/grey.svg); }
    .pistachio { --close: url(/close/pistachio.svg); }

    .green img, .yellow img, .pink img,
    .red img, .grey img, .pistachio img,
    .white { cursor: var(--close), crosshair; } */

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

    #next { right: 0; }
    #prev { left: 0; }

    @media only screen and (max-width: 800px) {
        img { width: unset; height: 100%; }
        #sun { width: 100%; }
        article {
            width: 50%;
            height: 100%;
        }
    }

    @media only screen and (max-height: 800px) {
        .arrow { display: block; }
        img { width: unset; height: 100%; }
        article {
            width: 100%;
            height: calc(100% - 140px);
            top: 30px;
            flex-direction: row;
        }
    }

    @media only screen and (max-width: 600px) {
        .arrow { display: block; }
        img { width: 100%; height: unset; }
        article {
            width: 100%;
            height: 100%;
            flex-direction: column;
        }
    }
</style>
