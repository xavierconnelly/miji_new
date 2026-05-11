<!--
    Wraps a single row in an awards/publications table.

    - Renders <a> if there's a project to link to (or an explicit `href`),
      otherwise renders <div>.
    - Detects external URLs from `href` and adds target="_blank" rel="noopener".
    - Emits hover state via `onHover(slug, label)` / `onLeave()` callbacks so
      a single <ProjectPreview /> can react to all rows.
    - Owns the dot indicator and per-project hover colours so they're not
      duplicated across awards and publications.
-->
<script>
    export let project = null;    // project object from projects.js, or null
    export let label = null;      // optional override for the hover preview title
    export let href = null;       // optional explicit URL (e.g. external link)
    export let onHover = () => {};
    export let onLeave = () => {};

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
    on:mouseenter={() => onHover(slug, label)}
    on:mouseleave={() => onLeave()}
    class="row dot {slug ?? ''}"
>
    <slot />
</svelte:element>

<style>
    .row {
        display: flex;
        width: 100%;
        line-height: 130%;
    }

    /* Hover text colour: default green, only on anchor rows (not Office Award divs) */
    a.row:hover :global(*) { color: var(--green) }

    /* Per-project hover text colour, anchor rows only */
    a.row.ABHouse:hover            :global(*) { color: var(--pistachio) }
    a.row.ALightAddition:hover     :global(*) { color: var(--red) }
    a.row.ACourtyardHouse:hover    :global(*) { color: var(--pink) }
    a.row.APavilion:hover          :global(*) { color: var(--yellow) }
    a.row.ARenovationForThree:hover :global(*) { color: var(--green) }
    a.row.ACertainKindofLife:hover :global(*) { color: var(--pink) }
    a.row.AHouseForOne:hover       :global(*) { color: var(--green) }
    a.row.FourVisitsTo52Posts:hover :global(*) { color: var(--grey) }
    a.row.TokyoTina:hover          :global(*) { color: var(--red) }

    /* Dot indicator (appears on every row, link or not) */
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

    /* Default green dot on hover */
    .dot:hover::before { background: var(--green) }

    /* Per-project dot hover colour */
    .ABHouse:hover::before            { background: var(--pistachio) }
    .ALightAddition:hover::before     { background: var(--red) }
    .ACourtyardHouse:hover::before    { background: var(--pink) }
    .APavilion:hover::before          { background: var(--yellow) }
    .ARenovationForThree:hover::before { background: var(--green) }
    .ACertainKindofLife:hover::before { background: var(--pink) }
    .AHouseForOne:hover::before       { background: var(--green) }
    .FourVisitsTo52Posts:hover::before { background: var(--grey) }
    .TokyoTina:hover::before          { background: var(--red) }

    @media only screen and (max-width: 800px) {
        .dot::before { display: none; }
        .row {
            border-top: 1px solid;
            padding: 10px 0;
        }
    }
</style>
