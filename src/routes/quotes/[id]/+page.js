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
	const data = await request(import.meta.env.VITE_API, query, variables);
	return {
		data
	};
};
