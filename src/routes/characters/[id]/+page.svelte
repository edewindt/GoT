<script>
	export let data;
	let Data = data.data.character;

	console.log(Data);
	let quotes = Data.quotes;
	console.log(quotes);
	let randquote = quotes[Math.floor(Math.random() * quotes.length)];
	let i;
	const random = () => {
		i = Math.random() * quotes.length;
		i = Math.floor(i);
		console.log(i);
		randquote = quotes[i];
	};
</script>

<section>
	<div class="character">
		<div class="maind">
			{#each Data.media as { image }}
				<img src={image} alt="" />
			{/each}
			<div class="details">
				<p class="big">{Data.fullname}</p>
				<p>Fullname: {Data.fullname}</p>
				<p>Title: {Data.title}</p>
				<p>Family: House {Data.family.house}</p>
				<p>ID:{Data.id}</p>
			</div>
		</div>
		<p class="quote">Quote: {randquote.body}</p>
		<div class="quote-gen">
			<p>From Season {randquote.season} Episode {randquote.episode}</p>
			<button on:click={random}>New Quote</button>
		</div>
	</div>
</section>

<style>
	.quote-gen {
		display: flex;
		align-items: center;
	}
	button {
		margin-left: 1rem;
		padding: 0.5rem;
		font-size: 1rem;
		font-family: 'Aboreto', cursive;
	}
	.quote {
		margin: 3rem 0;
	}
	.big {
		margin-bottom: 2rem;
		font-size: 3rem;
	}
	.maind {
		display: flex;
		align-items: center;
	}
	.details {
		display: block;
	}
	section {
		display: grid;
		justify-content: center;
		align-items: center;
		background-color: var(--black);
		height: calc(100vh - 4.5rem);
	}
	img {
		width: 20rem;
		height: 20rem;
		margin: 2rem;
		margin-top: 0;
		object-fit: cover;
		border-radius: 50%;
	}
	.character {
		width: 60rem;
		padding: 3rem;
		border-radius: 2.5rem;
		background-color: var(--darkp);
		box-shadow: 0 0 1rem pink;
	}
	p {
		font-family: 'Aboreto', cursive;
		font-weight: 500;
		color: var(--light);
		font-size: 1.75rem;
	}
</style>
