<script>
	export let data;
	let Data = data.data;
</script>

{#each Data.families as { house, characters }}
	<p>
		House:{house} Characters:{#each characters as character}{character.fullname}{/each}
	</p>
{/each}
