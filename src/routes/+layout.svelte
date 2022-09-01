<script>
	import css from '$lib/app.css';
	import Nav from '../lib/components/nav.svelte';
</script>

<header><Nav /></header>
<main><slot /></main>

<style>
	/* header {
		opacity: 0.7;
	} */
	main {
		padding-top: 4.5rem;
	}
</style>
