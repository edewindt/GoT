<script>
	let isOpen = false;
	export let family;
</script>

<div class="accord">
	<button on:click={() => (isOpen = !isOpen)} class:active={isOpen} class="accordion"
		>{family.house}
		<img class="img" src={family.sigil} alt="" />
	</button>
	<div class:open-panel={isOpen} class="panel">
		Characters in {family.house}:
		{#each family.characters as character}<p class="char">
				<a href={'/characters/' + character.id}>{character.fullname}</a>
			</p>{:else}<p>No house or family members...</p>
		{/each}
		<a id="lm" href={'/houses/' + family.id}>Learn more</a>
	</div>
</div>

<style>
	.accord {
		padding-top: 3rem;
	}
	.accordion {
		background-color: var(--darkp);
		color: var(--light);
		cursor: pointer;
		padding: 18px;
		width: 75rem;
		max-width: 90vw;
		height: 10rem;
		text-align: center;
		border: none;
		outline: none;
		transition: 0.4s;
		border-radius: 1.5rem;
		box-shadow: 0 0 1rem pink;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.75rem;
		font-family: 'Aboreto', cursive;
		font-weight: 500;
	}
	.img {
		background-color: black;
		width: 6rem;
		height: 6rem;
		border-radius: 20%;
		object-fit: cover;
		margin-left: 2rem;
	}
	/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
	.active,
	.accordion:hover {
		background-color: var(--black);
		filter: contrast(150%);
		box-shadow: 0 0 1rem yellow;
		color: var(--orange);
	}
	.active {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	/* Style the accordion panel. Note: hidden by default */
	.panel {
		padding: 0 18px;
		background-color: rgb(255, 236, 205);
		display: block;
		height: 0;
		max-width: 90vw;
		overflow: hidden;
		transition: 0.3s;
		border-radius: 1.5rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		font-size: 1.75rem;
		font-family: 'Aboreto', cursive;
		font-weight: 500;
		text-align: center;
	}
	.open-panel {
		height: 30rem;
		border-top-right-radius: 0;
		border-top-left-radius: 0;
	}

	a {
		color: black;
	}
	a:hover {
		color: red;
	}
	#lm {
		color: rgb(21, 135, 135);
	}
	#lm:hover {
		color: rgb(133, 208, 208);
	}

	@media only screen and (max-width: 450px) {
		.accordion {
			font-size: 1.5rem;
		}
		.panel {
			font-size: 1.5rem;
		}
	}
</style>
