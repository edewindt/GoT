<script>
	export let data;
	import { goto } from '$app/navigation';
	let Data = data.data.quote;
	console.log(Data);
	const close = () => {
		goto('/quotes');
	};
</script>

<section>
	<div class="quote">
		<h3>{Data.author.fullname}</h3>
		<p>"{Data.body}"</p>
		<p>From Season {Data.season} Episode {Data.episode}</p>
		<span on:click={close}
			><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"
				/></svg
			>
		</span>
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
		position: relative;
	}
	section {
		background-color: var(--black);
		height: calc(100vh - 4.5rem);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	span {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}
	p {
		font-family: 'Cabin', sans-serif;
		font-weight: 300;
		color: var(--light);
		font-size: 1.5rem;
	}
	h3 {
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
