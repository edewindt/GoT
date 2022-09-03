<script>
	export let data;
	let Data = data.data;
</script>

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
		font-weight: 700;
		color: var(--light);
		font-size: 2rem;
	}
	section {
		background-color: black;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.quotecard {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 10rem;
		width: 100rem;
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
</style>
