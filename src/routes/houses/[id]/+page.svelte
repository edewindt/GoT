<script>
	import { goto } from '$app/navigation';
	export let data;
	let Data = data.data.family;
	console.log(Data);
	const close = () => {
		goto('/quotes');
	};
</script>

<section>
	<div class="house">
		<div class="house-head">
			<img src={Data.sigil} alt="" />
			<div class="head-data">
				<p>House: {Data.house}</p>
				<p>Origin: {Data.origin}</p>
				<p>Region: {Data.region}</p>
				<p>Seat: {Data.seat}</p>
			</div>
			<span on:click={close}
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"
					/></svg
				>
			</span>
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
		position: relative;
	}
	span {
		position: absolute;
		top: 2rem;
		right: 2rem;
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
	}
</style>
