<!--
    Wraps a single row in awards/publications + renders the hover preview
    span as an adjacent sibling. The CSS `+` combinator drives the hover
    state — no JS, no event handlers.

    - Renders <a> if there's a project (or an explicit `href`), otherwise <div>
    - Auto-detects external URLs and adds target="_blank" rel="noopener"
    - Owns the dot indicator, per-project hover colours, and preview pane
      so they're not duplicated across awards and publications
-->
<script>
    export let project = null;    // project object from projects.js, or null
    export let label = null;      // optional override for preview title
    export let href = null;       // optional explicit URL (e.g. external)

    $: resolvedHref = href ?? (project ? `/projects/${project.slug}` : null);
    $: isExternal = !!resolvedHref && /^https?:\/\//.test(resolvedHref);
    $: slug = project?.slug ?? null;
</script>

<svelte:element
    this={resolvedHref ? 'a' : 'div'}
    href={resolvedHref}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    data-sveltekit-noscroll
    class="row dot {slug ?? ''}"
>
    <slot />
</svelte:element>

{#if project}
    <span class="preview {project.slug}">
        <h5>{label ?? project.title}</h5>
        <img src="../images/{project.slug}/{project.images[0]}_800.webp" alt={project.title}>
    </span>
{/if}

<style>
    /* ---------- Row ---------- */
    .row {
        display: flex;
        width: 100%;
        line-height: 130%;
    }

    /* Hover text colour: default green, anchor rows only
       (div rows for Office Award / Office Profile don't change colour) */
    a.row:hover :global(*) { color: var(--green) }

    /* Per-project hover text colour */
    a.row.ABHouse:hover             :global(*) { color: var(--pistachio) }
    a.row.ALightAddition:hover      :global(*) { color: var(--red) }
    a.row.ACourtyardHouse:hover     :global(*) { color: var(--pink) }
    a.row.APavilion:hover           :global(*) { color: var(--yellow) }
    a.row.ARenovationForThree:hover :global(*) { color: var(--green) }
    a.row.ACertainKindofLife:hover  :global(*) { color: var(--pink) }
    a.row.AHouseForOne:hover        :global(*) { color: var(--green) }
    a.row.FourVisitsTo52Posts:hover :global(*) { color: var(--grey) }
    a.row.TokyoTina:hover           :global(*) { color: var(--red) }

    /* ---------- Dot ---------- */
    .dot::before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        position: relative;
        left: 0;
        top: 1.5px;
        vertical-align: middle;
        border-radius: 12px;
        margin-right: 10px;
        margin-left: -24px;
    }

    .dot:hover::before { background: var(--green) }
    .ABHouse:hover::before             { background: var(--pistachio) }
    .ALightAddition:hover::before      { background: var(--red) }
    .ACourtyardHouse:hover::before     { background: var(--pink) }
    .APavilion:hover::before           { background: var(--yellow) }
    .ARenovationForThree:hover::before { background: var(--green) }
    .ACertainKindofLife:hover::before  { background: var(--pink) }
    .AHouseForOne:hover::before        { background: var(--green) }
    .FourVisitsTo52Posts:hover::before { background: var(--grey) }
    .TokyoTina:hover::before           { background: var(--red) }

    /* ---------- Preview pane ---------- */
    .preview {
        width: calc(25% - 40px);
        position: fixed;
        left: 0;
        top: 30px;
        padding: 22px 0 10px 10px;
        margin-right: 50px;
        opacity: 0;
        transition: 3s;             /* slow fade out when un-hovering */
        background: white;
        z-index: -99;
        height: 100%;
    }

    /* .preview h5 {
        padding-bottom: 1em;
        border-bottom: 1px solid;
        margin-bottom: 1em;
        width: 100%;
    } */

    .preview img {
        width: 80%;
        margin: 0 auto;
        opacity: 0;
        transition: opacity 2s;
    }

    /* Pure CSS hover trigger via adjacent sibling combinator */
    a.row:hover + .preview {
        transition: 0.5s;           /* fast fade in */
        opacity: 1;
        z-index: 99;
    }

    a.row:hover + .preview img {
        opacity: 1;
    }

    /* ---------- Mobile ---------- */
    @media only screen and (max-width: 800px) {
        .dot::before { display: none; }
        .preview { display: none; }
        .row {
            border-top: 1px solid;
            padding: 10px 0;
        }
    }
</style>
