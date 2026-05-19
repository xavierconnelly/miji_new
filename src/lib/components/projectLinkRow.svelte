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

    $: resolvedHref = href ?? (project ? `/projects/${project.id}` : null);
    $: isExternal = !!resolvedHref && /^https?:\/\//.test(resolvedHref);
</script>

<svelte:element
    this={resolvedHref ? 'a' : 'div'}
    href={resolvedHref}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    data-sveltekit-noscroll
    class="row dot"
    style={project ? `--hover: var(--${project.colour});` : ''}
>
    <slot />
</svelte:element>

{#if project}
    <span class="preview">
        <h5>{label ?? project.title}</h5>
        {#if project.photos?.length}
            <img
                src="{project.photos[0].url}?w=600&fm=webp&q=80"
                alt={project.title}
                loading="lazy"
            />
        {/if}
    </span>
{/if}

<style>
    /* ---------- Row ---------- */
    .row {
        display: flex;
        width: 100%;
        line-height: 130%;
    }

    /* Per-project hover colour */
    a.row:hover :global(*) { color: var(--hover, var(--green)); }
    .dot:hover::before { background: var(--hover, var(--green)); }

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

    /* ---------- Preview pane ---------- */
    .preview {
        width: calc(25% - 0px);
        position: fixed;
        left: 0;
        top: 30px;
        padding: 20px 10px 50px 10px;
        /* margin-right: 50px; */
        opacity: 0;
        transition: 3s;             /* slow fade out when un-hovering */
        /* background: rgba(255, 255, 255, 0.90); */
        z-index: -99;
        height: fit-content;
    }

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
