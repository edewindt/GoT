<script>
	export let data;
	let Data = data.data.medias;
	console.log(Data);
</script>

<svelte:head>
	<title>Got - Media</title>
</svelte:head>
<section>
	<h2>Media</h2>
	<div class="links">
		{#each Data as { image, gif, character }}
			<div class="item">
				<a href={image}>{character.firstname} Image</a>
				<img src={image} alt="" loading="lazy" />
			</div>
			<div class="item">
				<a href={gif}>{character.firstname} Gif</a>
				<img src={gif} alt="" loading="lazy" />
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		background-color: var(--black);
	}
	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	a {
		font-family: 'Aboreto', cursive;
		font-weight: 500;
		color: var(--light);
		font-size: 1.75rem;
	}
	a:hover {
		color: orange;
	}
	h2 {
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		color: var(--light);
		font-size: 2.5rem;
		text-align: center;
		padding: 2rem 0;
	}
	img {
		height: 20rem;
		width: 20rem;
		object-fit: cover;
		border-radius: 100%;
	}
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--darkp);
		margin-top: 2rem;
		padding: 3rem;
		border-radius: 2rem;
		box-shadow: 0 0 1rem pink;
	}
	.links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		grid-column-gap: 0.5rem;
	}
	.item:hover {
		transform: scale(1.25);
	}
</style>
