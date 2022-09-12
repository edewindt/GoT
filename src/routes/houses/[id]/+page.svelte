<script>
	export let data;
	let Data = data.data.family;
	console.log(Data);
</script>

<section>
	<div class="house">
		<div class="house-head">
			<img src={Data.sigil} alt="" />
			<div class="head-data">
				<p>House: {Data.house}</p>
				<p id="id">ID: {Data.id}</p>
				<p>Origin: {Data.origin}</p>
				<p>Region: {Data.region}</p>
				<p>Seat: {Data.seat}</p>
			</div>
		</div>
		<p>Words: {Data.words}</p>
		<p>Characters:</p>
		{#each Data.characters as { fullname }}
			<p>{fullname}</p>
		{:else}
			<p>No Family members, or characters...</p>
		{/each}
	</div>
</section>

<style>
	.head-data {
		display: block;
	}
	.house-head {
		display: flex;
	}
	img {
		height: 10rem;
		width: 10rem;
		margin: 2rem;
		margin-top: 0;
	}
	.house {
		background-color: var(--darkp);
		width: 60rem;
		padding: 3rem;
		border-radius: 2rem;
		max-width: calc(100vw - 6rem);
		box-shadow: 0 0 1rem pink;
	}
	section {
		height: fit-content;
		background-color: var(--black);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		min-height: calc(100vh - 4.5rem);
	}
	p {
		font-family: 'Aboreto', cursive;
		font-weight: 500;
		color: var(--light);
		font-size: 1.75rem;
		margin: 0.5rem 0;
	}
	@media only screen and (max-width: 750px) {
		.house-head {
			display: flex;
			flex-direction: column;
		}
	}

	@media only screen and (max-width: 550px) {
		p {
			font-size: 1.25rem;
		}
	}
	@media only screen and (max-width: 400px) {
		img {
			margin-left: 0;
		}
		#id {
			display: none;
		}
	}
</style>
