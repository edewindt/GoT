import { request, gql } from 'graphql-request';

const query = gql`
	{
		characters {
			fullname
			title
			id
			media {
				gif
			}
			family {
				house
				sigil
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
