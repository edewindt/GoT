import { request, gql } from 'graphql-request';

const query = gql`
	{
		quotes {
			id
			season
			episode
			author {
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
