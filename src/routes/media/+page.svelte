<script>
	export let data;
	let Data = data.data.medias;
	console.log(Data);
</script>

<section>
	<h2>Media</h2>
	<div class="links">
		{#each Data as { image, gif, character }}
			<a href={image}>{character.firstname} Image</a>
			<a href={gif}>{character.firstname} Gif</a>
		{/each}
	</div>
</section>

<style>
	section {
		background-color: black;
	}
	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	a {
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		color: var(--light);
		font-size: 2rem;
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
</style>
