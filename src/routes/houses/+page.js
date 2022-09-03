import { request, gql } from 'graphql-request';

const query = gql`
	{
		families {
			house
			sigil
			id
			characters {
				fullname
			}
		}
	}
`;
export const load = async () => {
	const data = await request(import.meta.env.VITE_API, query);

	return {
		data
	};
};
