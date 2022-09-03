<script>
	export let data;
	let Data = data.data.quote;
	console.log(Data);
</script>

<p>Author: {Data.author.fullname}</p>
<p>Body: {Data.body}</p>
<p>From Season {Data.season} Episode {Data.episode}</p>
<p>ID: {Data.id}</p>
