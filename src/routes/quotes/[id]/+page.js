import { request, gql } from 'graphql-request';
export const load = async ({ params }) => {
	const query = gql`
		query ($id: String) {
			quote(id: $id) {
				season
				episode
				body
				id
				author {
					fullname
				}
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
