<script>
	import Sideb from '../../lib/components/sideb.svelte';
</script>

<div class="lay">
	<div class="side">
		<Sideb />
	</div>
	<section>
		<slot />
	</section>
</div>

<style>
	.side {
		position: sticky;
		top: 0;
	}
	.lay {
		display: flex;
		justify-content: center;
	}
	section {
		background-color: antiquewhite;
		height: 60rem;
		width: 80rem;
		color: var(--darkp);
	}
</style>
