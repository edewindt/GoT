<script>
	let codes = [
		`{
			quotes {
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
		const data = await request(https://the-got-api-production.up.railway.app/, query, variables);`
	];
	let code = codes[0];
</script>

<h3>Requesting Quotes Information</h3>
<p>
	Every character has numerous quotes from different episodes and seasons, using this API you can
	find many of the most famous and memorable quotes from every character.
</p>
<p>For for information on this API and the schemas you can visit the API directly at:</p>
<a href="https://the-got-api-production.up.railway.app/"
	>https://the-got-api-production.up.railway.app/</a
>
<p>
	You can request all quotes with a single query using the 'quotes' query type, or individual quotes
	by id using the 'quote' query type. You can then request whatever properties you want from the
	quote model. To find out more about the schemas either visit the API directly or visit the Schemas
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
