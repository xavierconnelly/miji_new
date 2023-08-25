<script>
	let active = false;
	export let text = '';
	export let click = '';
	export let toggle = 'true';
</script>

<style>
	.active {background-color: #ff3e00; color: white;}
	button:hover {background-color: #ff3e00; color: white;}
</style>

{#if toggle == 'true'}
<button class:active="{active}" on:click="{() => active = !active}">{text}</button>
{:else}
<button on:click="{() => active = !active}">{text}</button>
{/if}