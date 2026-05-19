<script context="module">
    let cachedRotation = 0;
</script>

<script>
    import { onMount, onDestroy } from 'svelte';
    import { page } from '$app/stores';
    import { store } from '$lib/utils/store.js';

    export let projects;

    const targetFaces = 36;
    const repeats = Math.max(1, Math.round(targetFaces / projects.length));
    const faces = Array.from({ length: repeats }, () => projects).flat();
    const angleStep = 360 / faces.length;
    const radiusFactor = 0.5 / Math.tan(Math.PI / faces.length);

    let rotation = cachedRotation;
    let observer;

    $: isHome = $page.url.pathname === '/';
    $: if (observer) isHome ? observer.enable() : observer.disable();

    onMount(async () => {
        const { gsap } = await import('gsap');
        const { Observer } = await import('gsap/Observer');
        gsap.registerPlugin(Observer);

        observer = Observer.create({
            target: window,
            type: 'wheel,touch,pointer',
            wheelSpeed: 1,
            tolerance: 0,
            preventDefault: true,
            onChange: (self) => {
                rotation += self.deltaY * 0.05;
                cachedRotation = rotation;
            },
        });

        if (!isHome) observer.disable();
    });

    onDestroy(() => observer?.kill());
</script>

<div class="scene">
    <div class="cube" style:transform="translateZ(-400px) rotateY({rotation}deg)">
        {#each faces as project, i}
            <div
                class="face {project.colour} {project.id}"
                style:transform="rotateY({i * angleStep}deg) translateZ(calc(var(--face-width) * {radiusFactor}))"
            >
                <a class="images" data-sveltekit-noscroll href="/projects/{project.id}">
                    {#if project.blur}
                        <img
                            class="blur {$store}"
                            src="{project.blur.url}?w=401&fm=webp&q=90"
                            srcset="
                                {project.blur.url}?w=301&fm=webp&q=90 301w,
                                {project.blur.url}?w=401&fm=webp&q=90 401w
                            "
                            sizes="(min-width: 801px) and (min-height: 801px) 401px, 301px"
                            width={project.blur.width}
                            height={project.blur.height}
                            fetchpriority="high" 
                            alt="blurred hero of {project.title}"
                        />
                    {/if}
                    {#if project.photos?.length}
                        <img
                            class="clear {$store}"
                            src="{project.photos[0].url}?w=401&fm=webp&q=90"
                            width={project.photos[0].width}
                            height={project.photos[0].height}
                            alt="hero shot of {project.title}"
                        />
                    {/if}
                    {#if project.plans?.length}
                        <img
                            class="plan"
                            src={project.plans[0].url}
                            width={project.plans[0].width}
                            height={project.plans[0].height}
                            alt="plan drawing of {project.title}"
                        />
                    {/if}
                </a>
                <caption>{project.title} - {project.location}, {project.year} {#if project.context}{project.context}{/if}</caption>
            </div>
        {/each}
    </div>
</div>

<style>
    .scene {
        --face-width: 400px;
        width: 400px;
        height: 400px;
        perspective: none;
        position: fixed;
        top: 24px;
        left: 50%;
        transform: translate(-50%, 0%);
        user-select: none;
    }

    .cube {
        position: relative;
        transform-style: preserve-3d;
        user-select: none;
    }

    .face {
        width: 400.5px;
        min-width: 400.5px;
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .face img { width: 100%; height: auto;}

    .green img:hover     { cursor: url(/view/green.svg), crosshair; }
    .yellow img:hover    { cursor: url(/view/yellow.svg), crosshair; }
    .pink img:hover      { cursor: url(/view/pink.svg), crosshair; }
    .red img:hover       { cursor: url(/view/red.svg), crosshair; }
    .grey img:hover      { cursor: url(/view/grey.svg), crosshair; }
    .pistachio img:hover { cursor: url(/view/pistachio.svg), crosshair; }

    .images {
        position: relative;
        top: 6px;
    }

    img { width: 100%; display: block; }

    .clear {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        display: none;
    }

    .images .pictures { display: block; }
    .blueprints { display: none; }
    .blueprints ~ .blur { display: none; }
    .pictures + img { display: none; }
    .blueprints + .plan { display: block; background: white; }

    caption {
        display: none;
        position: relative;
        top: 3px;
        text-align: left;
    }

    .face:hover caption { display: block; }
    .face:hover .blur   { opacity: 1; }
    .face:hover .clear  { opacity: 1; }

    @media only screen and (max-width: 800px),
           only screen and (max-height: 800px) {
        .scene { --face-width: 300px; 
        }
        .face {
            width: 300.5px;
            min-width: 300.5px;
        }
    }
</style>