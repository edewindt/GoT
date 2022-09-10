<script>
	import Sideb from '../../lib/components/sideb.svelte';
</script>

<!-- <svelte:head>
	<link rel="stylesheet" href="$lib/assets/prism.css" />
	<script src="$lib/assets/prism.js"></script>
</svelte:head> -->
<div class="lay">
	<div class="side">
		<Sideb />
	</div>
	<main>
		<section><slot /></section>
	</main>
</div>

<style>
	.side {
		position: sticky;
		top: 0;
	}
	.lay {
		display: flex;
		justify-content: center;
		background-color: var(--black);
	}
	main {
		background-color: antiquewhite;
		height: fit-content;
		min-height: 100vh;
		width: 60rem;
		color: rgb(37, 31, 41);
	}
	section {
		margin: 2rem;
	}
</style>
