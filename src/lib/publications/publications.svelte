<script>
    import { projects } from '../../routes/projects/projects.js';
    import { publications } from './publications.js';
</script>

<div id="publications">
    <h6>Publications</h6>
    <div class="row title">
        <div class="year">Year</div>
        <div class="publisher">Publisher</div>
        <div class="issue">Issue</div>
        <div class="project">Project</div>
    </div>

    {#each publications as p}
        {@const project = projects.find(pr => pr.slug === p.project)}
        {@const href = p.url ?? (project ? `/projects/${project.slug}` : null)}
        {@const isExternal = !!p.url}

        <svelte:element
            this={href ? 'a' : 'div'}
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            data-sveltekit-noscroll
            class="row dot {project?.slug ?? ''}"
        >
            <div class="year">{p.year}</div>
            <div class="publisher">{p.publisher}</div>
            <div class="issue">{p.issue ?? ''}</div>
            <div class="project">{p.label ?? project?.title ?? p.project}</div>
        </svelte:element>

        {#if project}
            <span class={project.slug}>
                <h6>{p.label ?? project.title}</h6>
                <img src="../images/{project.slug}/{project.images[0]}_800.webp" alt={project.title}>
            </span>
        {/if}
    {/each}
</div>

<style>
    h6 {
        padding-bottom: 1em;
        border-bottom: 1px solid;
        margin-bottom: 1em;
    }

    #publications {
        padding-bottom: 100px;
        width: calc(100% - 0px);
        float: right;
        padding-top: 60px;
    }

    .title {
        padding-bottom: 1em;
    }

    .row {
        display: flex;
        width: 100%;
        line-height: 130%;
    }

    .row div {
        border: none;
        padding-right: 30px;
        vertical-align: top;
        text-align: left;
    }

    a:hover div { color: var(--green) }
    .ALightAddition:hover * { color: var(--red) }
    .ACourtyardHouse:hover * { color: var(--pink) }
    .ABHouse:hover * { color: var(--pistachio) }
    .APavilion:hover * { color: var(--yellow) }
    .ARenovationForThree:hover * { color: var(--green) }
    .ACertainKindofLife:hover * { color: var(--pink) }
    .AHouseForOne:hover * { color: var(--green) }
    .FourVisitsTo52Posts:hover * { color: var(--grey) }
    .TokyoTina:hover * { color: var(--red) }

    .year {
        width: 10%;
        padding-right: 60px;
    }
    .issue {
        width: 30%
    }
    .publisher {
        width: 30%;
    }
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
        transition: 2s;
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

    #publications .dot::before {
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

    #publications .dot:hover::before { background: var(--green) }
    #publications .ALightAddition:hover::before { background: var(--red) }
    #publications .ACourtyardHouse:hover::before { background: var(--pink) }
    #publications .ABHouse:hover::before { background: var(--pistachio) }
    #publications .APavilion:hover::before { background: var(--yellow) }
    #publications .ARenovationForThree:hover::before { background: var(--green) }
    #publications .ACertainKindofLife:hover::before { background: var(--pink) }
    #publications .AHouseForOne:hover::before { background: var(--green) }
    #publications .FourVisitsTo52Posts:hover::before { background: var(--grey) }
    #publications .TokyoTina:hover::before { background: var(--red) }

    @media only screen and (max-width: 800px) {
        #publications .dot::before,
        .title::before {
            display: none;
        }
        a:hover + span {
            opacity: 0;
        }
        span {
            display: none;
        }
        span img {
            display: none;
        }
        .year {
            width: 20%;
        }
        .issue {
            display: none;
        }
        .publisher {
            width: 40%
        }
        .project {
            width: 40%
        }
        .row {
            border-top: 1px solid;
            padding: 10px 0;
        }
        h6 {
            border-bottom: 0px solid;
            margin-bottom: unset;
        }
    }
</style>