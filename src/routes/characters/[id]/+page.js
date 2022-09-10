import { request, gql } from 'graphql-request';
export const load = async ({ params }) => {
	const query = gql`
		query ($id: String!) {
			character(id: $id) {
				fullname
				id
				title
				family {
					house
					sigil
				}
				media {
					gif
					image
				}
				quotes {
					body
					season
					episode
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
