<script>
	export let data;
	let Data = data.data;
</script>

{#each Data.quotes as { author, season, episode, id }}
	<p>Author:{author.fullname} Season:{season} Episode:{episode} ID:{id}</p>
{/each}
