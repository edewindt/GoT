import { request, gql } from 'graphql-request';

const query = gql`
	{
		characters {
			fullname
			title
			id
			family {
				house
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
