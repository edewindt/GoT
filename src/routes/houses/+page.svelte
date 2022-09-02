<script>
	import Accordion from '../../lib/components/accordion.svelte';
	export let data;
	let Data = data.data;
	console.log(Data.families);
</script>

<section>
	<h2>Houses</h2>

	{#each Data.families as family}
		<Accordion {family} />
	{/each}
</section>

<style>
	h2 {
		color: aliceblue;
		text-align: center;
		font-size: 2.5rem;
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		padding-top: 2rem;
	}

	section {
		background-color: black;
	}
</style>
