<!--
    ProjectGallery — renders a single project's photos, plans, prev/next
    buttons and caption.

    Props:
      project   — project object from microCMS
                  (photos[], plans[], context, colour, title, location, year)
      prevSlug  — slug for "previous"
      nextSlug  — slug for "next"
      closeable — when true, images link to "/" on desktop and a white backdrop
                  appears. Mobile ignores closeable (no "home" UX on mobile).
                  Used on [slug] pages.
-->
<script>
    import MediaQuery from '$lib/layout/mediaQuery.svelte';

    export let project;
    export let prevSlug;
    export let nextSlug;
    export let closeable = false;
</script>

<article class={project.colour}>
    <MediaQuery query="(min-width: 800px)" let:matches>
        <svelte:element
            this={closeable && matches ? 'a' : 'div'}
            href={closeable && matches ? '/' : undefined}
            data-sveltekit-noscroll
            class="display"
        >
            {#each project.photos as photo, i}
                <img
                    src="{photo.url}?w=800&fm=webp&q=80"
                    srcset="
                        {photo.url}?w=400&fm=webp&q=80 400w,
                        {photo.url}?w=800&fm=webp&q=80 800w,
                        {photo.url}?w=1200&fm=webp&q=80 1200w
                    "
                    sizes="(max-width: 600px) 100vw, (max-width: 800px) 50vw, 40vw"
                    width={photo.width}
                    height={photo.height}
                    alt={photo.alt ?? project.title}
                    loading={i < 3 ? 'eager' : 'lazy'}
                    fetchpriority={i === 0 ? 'high' : 'auto'}
                />
            {/each}
            {#each project.plans as plan}
                <img
                    class="plan"
                    src={plan.url}
                    width={plan.width}
                    height={plan.height}
                    alt={plan.alt ?? `${project.title} plan`}
                    loading="lazy"
                />
            {/each}
        </svelte:element>
    </MediaQuery>

    <MediaQuery query="(max-width: 800px)" let:matches>
        {#if matches}
            <div class="buttons">
                <a href="/projects/{prevSlug}" data-sveltekit-scroll>
                    <img id="prev" class="arrow" src="/prev/{project.colour}.svg" alt="previous project">
                </a>
                <a href="/projects/{nextSlug}" data-sveltekit-scroll>
                    <img id="next" class="arrow" src="/next/{project.colour}.svg" alt="next project">
                </a>
            </div>
        {/if}
    </MediaQuery>

    <div id="sun" class={project.colour}>
        <h2>{project.title}</h2> &nbsp;-&nbsp;
        <p>{project.location}, {project.year} {#if project.context}{project.context}{/if}</p>
    </div>
</article>

{#if closeable}
    <a data-sveltekit-noscroll class="white {project.colour}" href="/" aria-label="Close project"></a>
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
        height: auto;
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

    @media (max-width: 799px) {
        .white { display: none; }
    }

    /* Project-colour cursors — for both project images and the white backdrop. */
    .green     { --close: url(/close/green.svg);}
    .yellow    { --close: url(/close/yellow.svg);}
    .pink      { --close: url(/close/pink.svg);}
    .red       { --close: url(/close/red.svg);}
    .grey      { --close: url(/close/grey.svg);}
    .pistachio { --close: url(/close/pistachio.svg);}

    :is(.green, .yellow, .pink, .red, .grey, .pistachio) img,
    .white { cursor: var(--close), crosshair; }

    .green #sun     {background: var(--green)}
    .yellow #sun    {background: var(--yellow)}
    .pink #sun      {background: var(--pink)}
    .red #sun       {background: var(--red)}
    .grey #sun      {background: var(--grey)}
    .pistachio #sun {background: var(--pistachio)}

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
        #sun { width: 100%; }
        article {
            width: 50%;
            height: 100%;
            /* height: calc(100% - 140px); */
        }
        .arrow { display: block; }
        /* img { width: unset; height: 100%; } */
    }

    @media only screen and (max-width: 600px) {
        article {
            width: 100%;
            height: 100%;
            flex-direction: column;
        }
    }
</style>