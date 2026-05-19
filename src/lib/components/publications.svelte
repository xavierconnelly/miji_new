<script>
    import ProjectLinkRow from '$lib/components/projectLinkRow.svelte';
    export let publications = [];
</script>

<div id="publications">
    <h5>Publications</h5>
    <div class="row title">
        <div class="year">Year</div>
        <div class="publisher">Publisher</div>
        <div class="issue">Issue</div>
        <div class="project">Project</div>
    </div>

    {#each publications as p}
        <ProjectLinkRow
            project={p.project}
            label={p.label}
            href={p.url || null}
        >
            <div class="year">{p.year}</div>
            <div class="publisher">{p.publisher}</div>
            <div class="issue">{p.issue || ''}</div>
            <div class="project">{p.label || p.project?.title}</div>
        </ProjectLinkRow>
    {/each}
</div>

<style>
    #publications {
        padding-bottom: 100px;
        width: 100%;
        float: right;
        padding-top: 60px;
    }

    .title {
        display: flex;
        width: 100%;
        line-height: 130%;
        padding-bottom: 1em;
    }

    /* Column widths — apply to both title row and slot content */
    .year {
        width: 10%;
        padding-right: 60px;
    }
    .publisher,
    .issue,
    .project {
        width: 30%;
        padding-right: 30px;
    }

    @media only screen and (max-width: 800px) {
        .year {
            width: 20%;
            padding-right: 0;
        }
        .issue {
            display: none;
        }
        .publisher,
        .project {
            width: 40%;
        }
        h5 {
            border-bottom: 0;
            margin-bottom: unset;
        }
    }
</style>
