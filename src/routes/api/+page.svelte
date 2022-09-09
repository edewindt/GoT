<script>
	let codes = [
		`let fetched = [];
    async () => {
        const url1 = 'http://localhost:8000/characters';
        const url2 = 'http://localhost:8000/families';
        const url3 = 'http://localhost:8000/quotes';
        const url4 = 'http://localhost:8000/media';

        const results = await Promise.all([fetch(url1), fetch(url2), fetch(url3), fetch(url4)]);

        const datas = results.map((data) => data.json());

        fetched = await Promise.all(datas);
    };`,
		`		const query = gql\`
			query ($firstname: String) {
				searchChar(firstname: $firstname) {
					fullname
					lastname
					firstname
					id
					family {
						house
					}
					quotes {
						body
						season
						episode
					}
					media {
						gif
						image
					}
				}
			}
		\`;

		const variables = {
			firstname: input
		};
		const data = await request(https://the-got-api-production.up.railway.app/, query, variables);`
	];
	let code = codes[0];
</script>

<h3>This app uses GraphQL</h3>
<p>
	This app uses GraphQL instead of the standard REST API most commonly used when interacting with
	web APIs. The syntax for interacting with GraphQL is considerably different, but is for the most
	part simpler than making a standard fetch request. Graphql also allows for more freedom and
	control when making requests, which can mitigate some of the downsides to poorly modeled data, or
	the use of document databases vs using a relational database. This also saves the client side
	developer time when trying to get the data they need from the API they're pulling from. Instead of
	fetching from multiple API endpoints, with data you often don't need, or data modeled in a way
	that is awkward to consume, GraphQL makes it easy to get everything you need exactly how you want
	it.
</p>
<p>
	For for information on this API and the schemas, and to experiment with queries and requests, you
	can visit the API directly at:
</p>
<a href="https://the-got-api-production.up.railway.app/"
	>https://the-got-api-production.up.railway.app/</a
>
<p>
	You can also find information about the schemas and how to make requests within this documentation
	using the sidebar on the left.
</p>
<p>
	Below is an example of a request made with the standard REST vs a GraphQL request. Note to make
	graphql requests you will often need a graphql client, though you can make a reqeuest using
	standard POST requests, I am not an expert at doing so. (Navigate between code blocks using tabs)
</p>
<div class="code">
	<button
		on:click={() => {
			code = codes[0];
		}}>REST</button
	><button
		on:click={() => {
			code = codes[1];
		}}>GraphQL</button
	>
	<pre><code class="language-js">
		{code}
	</code></pre>
</div>
<p>
	Within this documentation I will be explaining the graphql queries themselves, and not the
	logistics of importing or implementing a graphql client.
</p>

<style>
	p {
		margin-top: 1rem;
	}
	/* code {
		background-color: rgb(31, 30, 35);
		color: aliceblue;
		overflow-wrap: break-word;
		white-space: pre-wrap;
		display: block;
		line-height: 1.6rem;
		margin-bottom: 1.6rem;
		font-size: 1rem;
		padding: 1.6rem;
	} */
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
