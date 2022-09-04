<script>
	export let data;
	import CharacterCard from '$lib/components/characterCard.svelte';
	let Data = data.data;
</script>

<section>
	<div class="header">
		<div class="char">Characters</div>
		<div class="title-h">Title</div>
		<div class="house">House</div>
	</div>
	<CharacterCard {Data} />
</section>

<style>
	.header {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		color: var(--light);
		width: 70rem;
		font-size: 2.5rem;
		max-width: 97vw;
	}
	.char {
		display: flex;
		justify-content: center;
		font-family: 'Aboreto', cursive;
		position: relative;
		right: 9rem;
	}
	.title-h {
		font-family: 'Aboreto', cursive;
		position: relative;
		left: 2rem;
	}

	.house {
		display: flex;
		justify-content: center;
		font-family: 'Aboreto', cursive;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: black;
		height: 100%;
		padding-top: 3rem;
	}
	@media only screen and (max-width: 1400px) {
		.title-h {
			position: static;
		}
		.char {
			position: static;
		}
	}
	@media only screen and (max-width: 1000px) {
		.title-h {
			display: none;
		}
		.header {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media only screen and (max-width: 500px) {
		.header .char,
		.house {
			font-size: 1.5rem;
		}
		.header {
			width: 90vw;
		}
	}
</style>
