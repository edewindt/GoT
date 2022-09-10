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
		color: rgb(37, 31, 41);
	}
	section {
		margin: 2rem;
	}
	.lay {
		display: flex;
		justify-content: center;
		background-color: var(--black);
	}
</style>
