<script>
	import css from '$lib/app.css';
	import Nav from '../lib/components/nav.svelte';
</script>

<header><Nav /></header>

<main><slot /></main>

<style>
	main {
		padding-top: 4.5rem;
	}
</style>
