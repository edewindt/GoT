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
	const data = await request('http://localhost:8000/', query);
	return {
		data
	};
};
