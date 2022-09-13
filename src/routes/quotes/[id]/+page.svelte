<script>
	export let data;
	let Data = data.data.quote;
	console.log(Data);
</script>

<section>
	<div class="quote">
		<p>{Data.author.fullname}</p>
		<p>"{Data.body}"</p>
		<p>From Season {Data.season} Episode {Data.episode}</p>
	</div>
</section>

<style>
	.quote {
		display: grid;
		width: 60rem;
		background-color: var(--darkp);
		padding: 3rem;
		border-radius: 2rem;
		gap: 1.5rem;
		margin: 3rem;
		box-shadow: 0 0 1rem pink;
	}
	section {
		background-color: var(--black);
		height: calc(100vh - 4.5rem);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	p {
		font-family: 'Aboreto', cursive;
		font-weight: 500;
		color: var(--light);
		font-size: 1.5rem;
	}
	@media only screen and (max-width: 500px) {
		.quote p {
			font-size: 1.5rem;
		}
	}
	@media only screen and (max-width: 450px) {
		.quote p {
			font-size: 1.25rem;
		}
	}
	@media only screen and (max-width: 400px) {
		.quote p {
			font-size: 1rem;
		}
	}
</style>
