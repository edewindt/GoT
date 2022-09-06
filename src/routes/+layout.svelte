<script>
	import css from '$lib/app.css';
	import Nav from '../lib/components/nav.svelte';
	import { navigating } from '$app/stores';
	import { loading } from '$lib/loading';
	import Navload from '../lib/components/navload.svelte';
	$: $loading = !!$navigating;
	$: console.log($loading);
</script>

<header><Nav /></header>

<Navload />

<!-- <button on:click={() => ($loading = true)}>Set Loading</button> -->

<main><slot /></main>

<style>
	button {
		width: 10rem;
		height: 10rem;
	}
	main {
		padding-top: 4.5rem;
		max-width: 100vw;
	}
</style>
