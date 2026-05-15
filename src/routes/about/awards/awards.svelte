<script>
    import { projects } from '../../projects/projects.js';
    import { awards } from './awards.js';
    import ProjectLinkRow from '$lib/ProjectLinkRow.svelte';
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

        <ProjectLinkRow {project} label={a.label}>
            <div class="year">{a.year}</div>
            <div class="abrev">{a.type}</div>
            <div class="award">{a.award}</div>
            <div class="awarder">{a.awarder}</div>
            <div class="project">{a.label ?? project?.title ?? a.project}</div>
        </ProjectLinkRow>
    {/each}
</div>

<style>
    #awards {
        width: 100%;
        float: right;
    }

    /* h5,
    #back {
        padding-bottom: 1em;
        border-bottom: 1px solid;
        margin-bottom: 1em;
        width: 50%;
        float: left;
    } */

    #back {
		position: fixed;
		right: 20px;
		top: 50px;
	}
	
    #back:hover { color: var(--green) }

    .title {
        display: flex;
        width: 100%;
        line-height: 130%;
        padding-bottom: 1em;
    }

    /* Column widths apply to title row and slot content
       (slot content uses parent's scope) */
    .year,
    .abrev {
        width: 5%;
    }
    .award,
    .awarder,
    .project {
        width: 30%;
    }

    @media only screen and (max-width: 800px) {
        #awards {
            padding-top: 60px;
        }
        h5 { 
			width: 100%;
		}
        .acronyms { padding-left: unset; }
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
            width: 40%;
        }
    }
</style>
