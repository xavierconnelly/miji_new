<script>
    import { projects } from '../../routes/projects/projects.js';
    import { awards } from './awards.js';
</script>

<div id="awards">
    <h5>Awards</h5>
    <a data-sveltekit-noscroll href="/" id="back">Home</a>
    <div class="acronyms">
        <p>(W) Winner</p>
        <p>(S) Shortlist</p>
        <p>(C) Commendation</p>
        <p>(N) Nomination</p>
        <p>(F) Finalist</p>
    </div>
    <br>
    <div class="row title">
        <div class="year">Year</div>
        <div class="abrev"></div>
        <div class="award">Award</div>
        <div class="awarder"></div>
        <div class="project">Project</div>
    </div>

    {#each awards as a}
        {@const project = projects.find(p => p.slug === a.project)}

        <svelte:element
            this={project ? 'a' : 'div'}
            href={project ? `/projects/${project.slug}` : undefined}
            data-sveltekit-noscroll
            class="row dot {project?.slug ?? ''}"
        >
            <div class="year">{a.year}</div>
            <div class="abrev">{a.type}</div>
            <div class="award">{a.award}</div>
            <div class="awarder">{a.awarder}</div>
            <div class="project">{a.label ?? project?.title ?? a.project}</div>
        </svelte:element>

        {#if project}
            <span class={project.slug}>
                <h6>{a.label ?? project.title}</h6>
                <img src="../images/{project.slug}/{project.images[0]}_800.webp" alt={project.title}>
            </span>
        {/if}
    {/each}
</div>

<style>
    #awards {
        width: calc(100% - 0px);
        float: right;
    }

    h5,
    h6,
    #back {
        padding-bottom: 1em;
        border-bottom: 1px solid;
        margin-bottom: 1em;
        width: 50%;
        float: left;
    }

    h6 {
        width: 100%;
    }

    #back {
        text-align: right;
        border-bottom: 1px solid black;
    }

    #back:hover {
        color: var(--green);
    }

    .title {
        padding-bottom: 1em;
    }

    .row {
        display: flex;
        width: calc(100%);
        line-height: 130%;
    }

    a:hover * { color: var(--green) }
    .ABHouse:hover * { color: var(--pistachio) }
    .ALightAddition:hover * { color: var(--red) }
    .ACourtyardHouse:hover * { color: var(--pink) }
    .APavilion:hover * { color: var(--yellow) }
    .ARenovationForThree:hover * { color: var(--green) }
    .ACertainKindofLife:hover * { color: var(--pink) }
    .AHouseForOne:hover * { color: var(--green) }
    .FourVisitsTo52Posts:hover * { color: var(--grey) }
    .TokyoTina:hover * { color: var(--red) }

    .year,
    .abrev {
        width: 5%;
    }
    .award,
    .awarder,
    .project {
        width: 30%
    }

    span {
        width: calc(25% - 40px);
        position: fixed;
        left: 0px;
        top: 30px;
        padding: 0px 0px 10px 10px;
        margin-top: 22px;
        margin-right: 50px;
        opacity: 0;
        transition: 3s;
        background: white;
        z-index: -99;
        height: 100%;
    }

    a:hover + span {
        transition: 0.5s;
        opacity: 1;
        z-index: 99;
    }

    a + span img {
        width: 80%;
        margin: 0 auto;
        opacity: 0;
        transition: 2s;
    }
    a:hover + span img {
        opacity: 1;
        transition: 2s;
    }

    #awards .dot::before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        position: relative;
        left: 0px;
        top: 1.5px;
        vertical-align: middle;
        -moz-border-radius: 12px;
        -webkit-border-radius: 12px;
        border-radius: 12px;
        border: 0px white solid;
        margin-right: 10px;
        margin-left: -24px;
    }

    #awards .dot:hover::before { background: var(--green) }
    #awards .ALightAddition:hover::before { background: var(--red) }
    #awards .ACourtyardHouse:hover::before { background: var(--pink) }
    #awards .ABHouse:hover::before { background: var(--pistachio) }
    #awards .APavilion:hover::before { background: var(--yellow) }
    #awards .ARenovationForThree:hover::before { background: var(--green) }
    #awards .ACertainKindofLife:hover::before { background: var(--pink) }
    #awards .AHouseForOne:hover::before { background: var(--green) }
    #awards .FourVisitsTo52Posts:hover::before { background: var(--grey) }
    #awards .TokyoTina:hover::before { background: var(--red) }

    @media only screen and (max-width: 800px) {
        #awards {
            padding-top: 60px;
        }

        h5 {
            width: 100%;
        }
        a:hover + span {
            opacity: 0;
        }
        .acronyms {
            padding-left: unset;
        }
        #awards .dot::before,
        .title::before,
        #awards a::before,
        span,
        span img,
        #back,
        .awarder {
            display: none;
        }
        .year,
        .abrev {
            width: 10%;
        }
        .award,
        .project {
            width: 40%
        }
        .row {
            border-top: 1px solid;
            padding: 10px 0;
        }
    }
</style>