<script>
	import { goto } from '$app/navigation';
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
	const close = () => {
		goto('/characters');
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
			</div>
			<span on:click={close}
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"
					/></svg
				>
			</span>
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
		font-size: 1.5rem;
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
	span {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}
	.character {
		width: 60rem;
		padding: 3rem;
		border-radius: 2.5rem;
		background-color: var(--darkp);
		box-shadow: 0 0 1rem pink;
		position: relative;
	}
	.details p {
		font-family: 'Aboreto', cursive;
		font-weight: 500;
		color: var(--light);
		font-size: 1.5rem;
	}
	p {
		font-size: 1.5rem;
		font-family: 'Cabin', sans-serif;
		font-weight: 300;
		color: var(--light);
	}
</style>
