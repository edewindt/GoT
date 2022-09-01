<script>
	export let data;
	let Data = data.data;
</script>

{#each Data.characters as { fullname, title, family }}
	<p>Name: {fullname}Title:{title} House: {family.house}</p>
{/each}
