<script>
	import { request, gql } from 'graphql-request';
	import { fade } from 'svelte/transition';
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
	let click = false;
	let sigil = '';
	const fetch = async () => {
		click = true;
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
		const data = await request(import.meta.env.VITE_API, query, variables);
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

<svelte:head><title>GoT - Home</title></svelte:head>
<section>
	<div class="container" class:cont={click}>
		<div class="search">
			<label for="">Search</label><input class="input" bind:value={input} type="text" /><button
				on:click={fetch}>Search</button
			>
		</div>

		{#if click}
			<div transition:fade={{ delay: 500 }} class="content">
				<div class="pics">
					<img id="gif" src={gif} alt="" />
					<div class="details">
						<h3 class="det-head">{fullname}</h3>
						<p>Fullname: {fullname}</p>
						<p id="id">ID: {id}</p>
						<p>Firstname: {firstname}</p>
						<p>Lastname: {lastname}</p>
						<p>Family: {family}</p>
					</div>
					<img id="image" src={image} alt="" />
				</div>
				<div class="quote-wrapper">
					<div class="quote">
						<h3>Quote:</h3>
						<div class="body">
							<p>"{randquote.body}"</p>
							<p>
								from Season {randquote.season}, Episode {randquote.episode}<button on:click={random}
									>New Quote</button
								>
							</p>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
	{#if !click}
		<div in:fade={{ delay: 200, duration: 300 }} class="intro">
			<h3>Search for the firstname of a Game of Thrones character to begin</h3>

			<p>Menu is in the top left</p>
		</div>
	{/if}
</section>

<style>
	.intro {
		text-align: center;
	}
	.intro p {
		margin-top: 3rem;
	}
	.input {
		width: 15rem;
		height: 2rem;
		border-radius: 10rem;
		border: 0.15rem solid rgb(186, 186, 186);
		padding-left: 1rem;
	}
	input:focus {
		outline: none;
	}
	label {
		font-size: 1.5rem;
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		color: var(--light);
	}
	button {
		font-size: 1.5rem;
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		border-radius: 0.5rem;
		border: none;
		padding: 0 0.5rem;
		transition: 0.4s;
		display: inline;
		margin: 2rem;
	}
	button:hover {
		cursor: pointer;
		color: orange;
		background-color: black;
	}
	.search {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 3rem;
	}
	section {
		display: grid;
		justify-content: center;
		background-color: black;
		min-height: calc(100vh - 4.5rem);
		grid-template-rows: 0.7fr 1fr;
		max-width: 100vw;
	}
	.container {
		width: 80rem;
		height: 12rem;
		background-color: var(--darkp);
		margin: 4rem 0;
		border-radius: 1.5rem;
		box-shadow: 0 0 1rem pink;
		max-width: calc(100vw - 2rem);
	}
	.cont {
		width: 100rem;
		min-height: 50rem;
		height: fit-content;
	}
	img {
		height: 20rem;
		width: 20rem;
		background-color: black;
		border-radius: 100%;
		object-fit: cover;
	}
	.pics {
		height: 20rem;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 5rem;
		max-width: 100vw;
	}
	p {
		font-size: 1.5rem;
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		color: var(--light);
	}
	.details {
		color: var(--light);
		display: grid;
		justify-content: center;
		text-align: center;
		margin: 3rem;
	}

	.quote {
		width: 45rem;
		max-width: 100vw;
	}
	.quote-wrapper {
		display: grid;
		justify-content: center;
	}
	.body {
		margin: 3rem;
	}
	h3 {
		text-align: center;
		font-size: 1.5rem;
		font-family: 'Aboreto', cursive;
		font-weight: 700;
		color: var(--light);
	}
	.det-head {
		font-size: 3.5rem;
		text-align: center;
		position: relative;
		bottom: 4rem;
	}

	@media only screen and (max-width: 1100px) {
		.container {
			margin-left: 1rem;
			height: 8rem;
		}
		button {
			margin: 0.5rem;
		}
		#image {
			display: none;
		}
		.cont {
			height: fit-content;
			margin: 0;
		}
	}
	@media only screen and (max-width: 800px) {
		.input {
			width: calc(38vw);
		}

		.pics {
			display: flex;
			flex-direction: column;
			height: 50rem;
			margin-top: 1rem;
			grid-template-rows: 1fr 1fr;
		}
		.details {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		.quote p:last-child {
			margin-top: 1.5rem;
		}
	}
	@media only screen and (max-width: 500px) {
		img {
			height: 15rem;
			width: 15rem;
		}
		.input {
			width: calc(38vw);
		}
		.det-head {
			font-size: 3rem;
		}
		.search {
			display: flex;
			flex-direction: column;
			margin-bottom: 2.5rem;
		}
		.container {
			height: fit-content;
		}
		.details {
			text-align: center;
			font-size: 1rem;
		}
		#id {
			display: none;
		}
	}
</style>
