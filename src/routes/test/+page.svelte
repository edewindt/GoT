<script>
	import { request, gql } from 'graphql-request';
	let input;
	let fullname = '';
	let firstname = '';
	let lastname = '';
	let family = '';
	let quotes = [];
	let randquote = { body: '', season: '', episode: '' };
	let id = '';
	let gif = '';
	let image = '';
	let sigil = '';
	const fetch = async () => {
		input = input.charAt(0).toUpperCase() + input.slice(1);

		const query = gql`
			query ($firstname: String) {
				searchChar(firstname: $firstname) {
					fullname
					lastname
					firstname
					id
					family {
						house
						sigil
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
		`;

		const variables = {
			firstname: input
		};
		console.log(input);
		const data = await request('http://localhost:8000/', query, variables);
		fullname = data.searchChar.fullname;
		firstname = data.searchChar.firstname;
		lastname = data.searchChar.lastname;
		id = data.searchChar.id;
		family = data.searchChar.family.house;
		gif = data.searchChar.media[0].gif;
		image = data.searchChar.media[0].image;
		quotes = data.searchChar.quotes;
		sigil = data.searchChar.family.sigil;
		console.log(quotes);
		randquote = quotes[Math.floor(Math.random() * quotes.length)];
		console.log(data);
	};

	const random = () => {
		let i;
		i = Math.random() * quotes.length;
		i = Math.floor(i);
		console.log(i);
		randquote = quotes[i];
	};
</script>

<label for="">Search</label><input bind:value={input} type="text" /><button on:click={fetch}
	>Search</button
>
<p>ID:{id}</p>
<img src={gif} alt="" />
<img src={image} alt="" />
<p>Fullname: {fullname}</p>
<p>Firstname:{firstname}</p>
<p>Lastname:{lastname}</p>
<p>Quote:{randquote.body}</p>
<button on:click={random}>New Quote</button>
<p>from Season {randquote.season}, Episode {randquote.episode}</p>
<p>Family:{family}</p>
<img src={sigil} alt="" />
