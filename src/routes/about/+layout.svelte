<script>
</script>

<div class="lay">
	<main><section><slot /></section></main>
</div>

<style>
	main {
		background-color: antiquewhite;
		height: fit-content;
		min-height: 100vh;
		width: 60rem;
		color: var(--darkp);
	}
	section {
		margin: 2rem;
	}
	.lay {
		display: flex;
		justify-content: center;
	}
</style>
