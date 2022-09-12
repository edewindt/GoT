<script>
	import css from '$lib/app.css';
	import Nav from '../lib/components/nav.svelte';
	import { navigating } from '$app/stores';
	import { loading } from '$lib/loading';
	import Navload from '../lib/components/navload.svelte';
	import { lightm } from '$lib/darkmode';
	$: $loading = !!$navigating;
	// $: console.log($loading);
	let darkp = 'rgb(37, 31, 41)';
	let light = 'aliceblue';
	let black = 'black';
	let orange = 'orange';
	$: if ($lightm === true) {
		darkp = 'white';
		light = 'black';
		black = 'var(--grey)';
		orange = 'black';
	} else {
		darkp = 'rgb(37, 31, 41)';
		light = 'aliceblue';
		black = 'black';
		orange = 'orange';
	}
</script>

<header style="--darkp:{darkp}; --light:{light}; --black:{black};--orange:{orange}"><Nav /></header>

<Navload />

<main style="--darkp:{darkp}; --light:{light}; --black:{black}; --orange:{orange}"><slot /></main>

<style>
	main {
		padding-top: 4.5rem;
		max-width: 100vw;
	}
</style>
