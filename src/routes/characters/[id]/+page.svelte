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
		{#each Data.media as { image }}
			<img src={image} alt="" />
		{/each}
		<p>Fullname: {Data.fullname}</p>
		<p>Title: {Data.title}</p>
		<p>Family: House {Data.family.house}</p>
		<p>ID:{Data.id}</p>
		<p>Quote: {randquote.body}</p>
		<p>From Season {randquote.season} Episode {randquote.episode}</p>
		<button on:click={random}>Quote generator</button>
	</div>
</section>

<style>
	section {
		display: grid;
		justify-content: center;
	}
	img {
		width: 30rem;
		height: 30rem;
		object-fit: cover;
	}
	.character {
		width: 80rem;
	}
	p {
		font-family: 'Aboreto', cursive;
		font-weight: 500;
		color: var(--light);
		font-size: 1.75rem;
	}
</style>
