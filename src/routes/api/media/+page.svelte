<script>
	let codes = [
		`{
			media {
				fullname
				firstname
				lastname
				id
				title
				quotes{body}
				family{house}
				media{image}
			}
		}`,
		`const query = gql'
			query ($id: String) {
				character(id: $id) {
					fullname
					lastname
					firstname
					id
					family {
						house
					}
					quotes {
						body
					}
					media {
						image
					}
				}
			}
		';

		const variables = {
			id
		};
		const data = await request(http://localhost:8000/, query, variables);`
	];
	let code = codes[0];
</script>

<h3>Requesting Media Information</h3>
<p>
	Every character has their own media, images, gifs, artwork, and more media to perhaps be added in
	future, this API makes it possible to access more than one type of a media, currently there is
	only one of every media type, but that will like change as the API matures.
</p>
<p>For for information on this API and the schemas you can visit the API directly at:</p>
<a href="https://the-got-api-production.up.railway.app/"
	>https://the-got-api-production.up.railway.app/</a
>
<p>
	You can request all media with a single query using the 'medias' query type, or individual media
	by id using the 'media' query type. You can then request whatever properties you want from the
	media model. To find out more about the schemas either visit the API directly or visit the Schemas
	tab in this documentation.
</p>
<p>Navigate between code blocks using the tabs provided.</p>
<div class="code">
	<button
		on:click={() => {
			code = codes[0];
		}}>All</button
	><button
		on:click={() => {
			code = codes[1];
		}}>By:id</button
	>
	<pre><code class="language-js">
		{code}
	</code></pre>
</div>

<style>
	p {
		margin-top: 1rem;
	}
	code {
		color: aliceblue;
		font-size: 1rem;
	}
	pre {
		background-color: rgb(31, 30, 35);
		margin: 0.3rem 0;
	}
	.code {
		margin: 1.6rem 0;
	}
	.code button {
		border: none;
		background-color: var(--darkp);
		color: var(--light);
		margin-left: 0.5rem;
		padding: 0.5rem;
		font-size: 1rem;
	}
	.code button:hover {
		cursor: pointer;
		background-color: black;
		color: orange;
	}
</style>
