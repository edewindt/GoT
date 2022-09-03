<script>
	export let Data;
</script>

<h1>Character!</h1>

{#each Data.characters as { id, fullname, family, media, title }}
	<a href={'/characters/' + id}>
		<div class="items">
			{#each media as { gif }}
				<li class="img"><img class="circ" src={gif} alt="" /></li>
			{/each}
			<li>{fullname}</li>
			<li class="title">{title}</li>
			<li class="img"><img class="circ" src={family.sigil} alt="" /></li>
			<li>{family.house}</li>
		</div>
	</a>
{/each}

<style>
	.items {
		width: 100%;
		display: grid;
		grid-template-columns: 0.5fr 1fr 0.5fr 0.5fr 1fr;
		height: 10rem;
		width: 100rem;
		background-color: var(--darkp);
		margin-top: 2rem;
		border-radius: 1.5rem;
		box-shadow: 0 0 1rem pink;
	}
	.items:hover {
		background-color: black;
		box-shadow: 0 0 1rem yellow;
	}

	li {
		display: flex;
		justify-content: start;
		align-items: center;
		text-align: left;
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		color: var(--light);
		font-size: 2rem;
	}

	.img {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.circ {
		background-color: black;
		width: 6rem;
		height: 6rem;
		border-radius: 20%;
		object-fit: cover;
	}

	.title {
		width: 20rem;
	}
	.items:hover li {
		color: orange;
	}
</style>
