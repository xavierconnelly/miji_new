<script context="module">
    let cachedRotation = 0;
</script>

<script>
    import { onMount, onDestroy } from 'svelte';
    import { page } from '$app/stores';
    import { store } from '$lib/utils/store.js';
    import { projects, desktopOrder } from '$lib/data/projects.js';

    const ordered = desktopOrder
        .map(slug => projects.find(p => p.slug === slug))
        .filter(Boolean); // safety: drop any slug that doesn't match

    // const faces = [...projects, ...projects, ...projects, ...projects];

    // Aim for ~36 total faces to preserve the dense cylinder look.
    // Adapts as projects are added/removed
    // Update to 39 or 40 if looking too sparse
    const targetFaces = 36;
    const repeats = Math.max(1, Math.round(targetFaces / ordered.length));   // ← ordered, not projects
    const faces = Array.from({ length: repeats }, () => ordered).flat();     // ← ordered, not projects
    const angleStep = 360 / faces.length;
    const radiusFactor = 0.5 / Math.tan(Math.PI / faces.length);

    let rotation = cachedRotation;
    let observer;

    // Cube only responds to input on the home route.
    // On project pages, Observer is disabled so the page can scroll normally.
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
            <!-- <div
                class="{project.colour} {project.slug} face"
                style:transform="rotateY({i * 10}deg) translateZ(var(--cylinder-radius))"
            > -->
            <div class="face {project.colour} {project.slug}" style:transform="rotateY({i * angleStep}deg) translateZ(calc(var(--face-width) * {radiusFactor}))">

                <a class="images" data-sveltekit-noscroll href="../projects/{project.slug}">
                    <img class="blur {$store}"  src="../images/{project.slug}/{project.images[0]}_800_blur.webp" width="auto" height="auto" alt="hero shot of {project.title}">
                    <img class="clear {$store}" src="../images/{project.slug}/{project.images[0]}_800.webp"      width="auto" height="auto" alt="blurred hero shot of {project.title}">
                    <img class="plan"           src="../images/{project.slug}/Plan_{project.plans[0]}_800.svg"   width="auto" height="auto" alt="a plan drawing of {project.title}">
                </a>
                <caption>{project.title} - {project.content}</caption>
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

    .face img { width: 100%; }

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