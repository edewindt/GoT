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
	const data = await request('http://localhost:8000/', query);

	return {
		data
	};
};
