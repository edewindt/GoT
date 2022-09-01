<script>
	export let data;
	let Data = data.data;
</script>

{#each Data.quotes as { body, author, season, episode }}
	<p>Body:{body}Author:{author.fullname} Season:{season} Episode:{episode}</p>
{/each}
