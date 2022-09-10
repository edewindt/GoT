<script>
	import Accordion from '../../lib/components/accordion.svelte';
	export let data;
	let Data = data.data.families;
</script>

<svelte:head>
	<title>Got - Houses</title>
</svelte:head>
<section>
	<h2>Houses</h2>

	{#each Data as family}
		<Accordion {family} />
	{/each}
</section>

<style>
	h2 {
		color: var(--light);
		text-align: center;
		font-size: 2.5rem;
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		padding-top: 2rem;
	}

	section {
		background-color: var(--black);
		display: grid;
		justify-content: center;
		flex-direction: column;
	}
</style>
