<script>
	export let data;
	let Data = data.data;
</script>

<svelte:head><title>GoT - Quotes</title></svelte:head>
<section>
	<h2>Quotes</h2>
	{#each Data.quotes as { author, season, episode, id }}
		<a href={'/quotes/' + id}>
			<div class="quotecard">
				<p>Author:{author.fullname} Season:{season} Episode:{episode}</p>
			</div></a
		>
	{/each}
</section>

<style>
	p {
		font-family: 'Aboreto', cursive;
		font-weight: 500;
		color: var(--light);
		font-size: 1.75rem;
	}
	section {
		background-color: black;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.quotecard {
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		height: 10rem;
		width: 75rem;
		max-width: 90vw;
		background-color: var(--darkp);
		margin-top: 2rem;
		border-radius: 1.5rem;
		box-shadow: 0 0 1rem pink;
	}
	.quotecard:hover {
		background-color: black;
		box-shadow: 0 0 1rem yellow;
	}
	.quotecard:hover p {
		color: orange;
	}
	h2 {
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		color: var(--light);
		font-size: 2.5em;
	}
	@media only screen and (max-width: 450px) {
		p {
			font-size: 1.5rem;
		}
	}
</style>
