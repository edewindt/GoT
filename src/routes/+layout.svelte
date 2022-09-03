<script>
	import css from '$lib/app.css';
	import Nav from '../lib/components/nav.svelte';
	let y;
	let lasty;
	y = lasty;
	let hide = false;
	if (y > lasty) {
		hide = true;
	}
	$: console.log(y);
	$: console.log(lasty);
</script>

<svelte:window bind:scrollY={y} />
{#if !hide}
	<header><Nav /></header>
{/if}
<main><slot /></main>

<style>
	main {
		padding-top: 4.5rem;
	}
</style>
