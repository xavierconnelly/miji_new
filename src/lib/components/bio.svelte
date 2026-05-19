<script>
    //not entirely neccessary, just used to enter 'Office Mi-Ji' into the text
    //could maybe be used for other things though, another way of moving data around
    import * as config from '$lib/utils/config';
    export let bio = '';
    export let contacts = [];
</script>

<div class="bio">
    <h5>{config.title}</h5>
    {#each bio.split('\n').filter(p => p.trim()) as para}
        <p>{para}</p>
    {/each}
</div>

<div class="contact">
    {#each contacts as c, i}
        {c.person}<br>
        <a href="mailto:{c.email}">{c.email}</a><br>
        <a href="tel:{c.phoneNumber.replaceAll(' ', '')}">{c.phoneNumber}</a>
        {#if i < contacts.length - 1}<br><br>{/if}
    {/each}
</div>
<div>
    ABRV 52058
</div>

<style>

:global(#about:has(a.row:hover)) {
    --bio-opacity: 0;
}
.bio p {
    line-height: 130%;
    max-width: 360px;
}
.bio p + p {
    margin-top: 1.2em;
}
</style>
