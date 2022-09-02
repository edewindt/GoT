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
	const data = await request('http://localhost:8000/', query, variables);
	return {
		data
	};
};
