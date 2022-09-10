<script>
	import { GraphQLClient, gql } from 'graphql-request';
	let variables = { username: '', body: '', contact: null };
	const endpoint = 'http://localhost:8000';
	let graphQLClient = new GraphQLClient(endpoint);
	const submit = async () => {
		const mutation = gql`
			mutation ($username: String!, $body: String!, $contact: String) {
				feedBack(username: $username, body: $body, contact: $contact) {
					username
					body
					contact
				}
			}
		`;

		await graphQLClient.request(mutation, variables);
		console.log('working');
		variables = { username: '', body: '', contact: null };
	};
</script>

<section>
	<form on:submit|preventDefault={submit}>
		<p id="p">(Used to distinguish feedback, can be anything)</p>
		<div class="user">
			<label for="">Username:</label><input
				bind:value={variables.username}
				type="text"
				name=""
				id=""
				required
			/>
		</div>
		<div class="body">
			<label for="">Feedback:</label><textarea
				bind:value={variables.body}
				name=""
				id=""
				cols="30"
				rows="10"
				required
			/>
		</div>
		<div class="contact">
			<label for="">(Optional) Contact:</label><input
				bind:value={variables.contact}
				type="text"
				name=""
				id=""
			/>
		</div>
		<button>Submit</button>
	</form>
</section>

<style>
	#p {
		max-width: 90%;
	}
	.user,
	.body,
	.contact {
		display: flex;
		justify-content: space-around;
		width: 25rem;
		margin-top: 1rem;
		max-width: 90%;
		margin: 0.5rem;
	}
	.body {
		flex-direction: column;
	}
	.body textarea {
		margin-top: 1rem;
		height: 10rem;
	}
	section {
		background-color: var(--black);
		height: 92.5vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	form {
		background-color: var(--darkp);
		min-height: 30rem;
		width: 40rem;
		border-radius: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 100vw;
		margin: 1rem;
		height: fit-content;
	}
	input {
		height: 2rem;
	}
	form {
		color: var(--light);
	}
	button {
		border: none;
		height: 2rem;
		width: 7rem;
	}
</style>
