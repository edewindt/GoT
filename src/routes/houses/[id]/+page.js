import { request, gql } from 'graphql-request';
export const load = async ({ params }) => {
	const query = gql`
		query ($id: String) {
			family(id: $id) {
				house
				sigil
				id
				characters {
					fullname
				}
				region
				blazon
				seat
				words
				origin
			}
		}
	`;

	const variables = {
		id: params.id
	};
	const data = await request('http://localhost:8000/', query, variables);
	return {
		data
	};
};
