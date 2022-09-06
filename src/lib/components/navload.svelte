<script>
	import { loading } from '$lib/loading';

	import { blur } from 'svelte/transition';
</script>

{#if $loading}
	<div class="loading" transition:blur>
		<img src="/src/lib/assets/fire.gif" alt="" />
		<p>Loading...</p>
	</div>
{/if}

<style>
	.loading {
		z-index: 1;
		top: 0;
		left: 0;
		position: fixed;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: black;
	}
	.loading p {
		font-size: 4rem;
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		color: var(--light);
	}
	img {
		width: 15rem;
		height: 15rem;
		position: relative;
		bottom: 2.5rem;
		/* border: solid 1rem white; */
	}
	@media only screen and (max-width: 500px) {
		.loading p {
			font-size: 2rem;
		}
		img {
			width: 8rem;
			height: 8rem;
			position: relative;
			bottom: 2.5rem;
			/* border: solid 1rem white; */
		}
	}
</style>
